import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { calculateINSS } from "../../helper/calculateINSS";
import { cpfMask, moneyMask } from "../../helper/maskValue";

import { addEmployee, updateEmployee } from "../../redux/sliceEmployees";
import Input from "../Input";
import { Form, Button } from "./styles";
const FormGroup = ({ isEdit }) => {
  const employees = useSelector((state) => state.employees.value);

  const params = useParams();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [dependentes, setDependentes] = useState(0);

  const [newNome, setNewNome] = useState("");
  const [newCpf, setNewCpf] = useState("");
  const [newSalario, setNewSalario] = useState("");
  const [newDesconto, setNewDesconto] = useState(0);
  const [newDependentes, setNewDependentes] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    targetValueINSS();
  }, [salario, newSalario]);

  function handleChangeNome(event) {
    return isEdit
      ? setNewNome(event.target.value)
      : setNome(event.target.value);
  }

  function handleChangeCpf(event) {
    return isEdit
      ? setNewCpf(cpfMask(event.target.value))
      : setCpf(cpfMask(event.target.value));
  }

  function handleChangesalario(event) {
    const { value } = event.target;

    if (isNaN(value)) {
      isEdit ? setNewSalario("") : setSalario("");
    }

    if (toString(value)) {
      isEdit ? setNewSalario("") : setSalario("");
    }

    return isEdit
      ? setNewSalario(moneyMask(event.target.value))
      : setSalario(moneyMask(event.target.value));
  }

  function handleChangedependentes(event) {
    return isEdit
      ? setNewDependentes(event.target.value)
      : setDependentes(event.target.value);
  }

  function targetValueINSS() {
    const typeSalary = isEdit ? newSalario : salario;

    const valueINSS = calculateINSS(
      parseFloat(typeSalary.replace(/[^\d,]+/g, "").replace(",", ".")),
    );

    isEdit ? setNewDesconto(Number(valueINSS)) : setDesconto(Number(valueINSS));
  }

  function handleSubmit() {
    if (isEdit) {
      return dispatch(
        updateEmployee({
          id: Number(params.id),
          nome: newNome,
          cpf: newCpf,
          salario: parseFloat(
            newSalario.replace(/[^\d,]+/g, "").replace(",", "."),
          ),
          desconto: newDesconto,
          dependentes: newDependentes,
        }),
      );
    }

    dispatch(
      addEmployee({
        id: employees[employees.length - 1].id + 1,
        nome,
        cpf,
        salario: parseFloat(salario.replace(/[^\d,]+/g, "").replace(",", ".")),
        desconto,
        dependentes,
      }),
    );
  }

  return (
    <Form>
      <Input
        placeholder="Nome"
        value={isEdit ? newNome : nome}
        onChange={handleChangeNome}
      />
      <Input
        placeholder="CPF"
        value={isEdit ? newCpf : cpf}
        onChange={handleChangeCpf}
      />
      <Input
        placeholder="Salário"
        value={isEdit ? newSalario : salario}
        onChange={handleChangesalario}
        min="0"
      />
      <Input
        placeholder="Dependentes"
        value={isEdit ? newDependentes : dependentes}
        onChange={handleChangedependentes}
        type="number"
        min="0"
      />

      <Button type="submit" onClick={handleSubmit}>
        {isEdit ? "Atualizar funcionário" : "Criar novo funcionário"}
      </Button>
    </Form>
  );
};

FormGroup.propTypes = {
  isEdit: PropTypes.bool,
};

FormGroup.defaultProps = {
  isEdit: false,
};

export default FormGroup;
