import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { calculateINSS } from "../../helper/calculateINSS";
import { cpfMask, moneyMask, numberMask } from "../../helper/maskValue";

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

  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    targetValueINSS();
  }, [salario]);

  useEffect(() => {
    validateForm();
  }, [nome, cpf, salario]);

  function handleChangeNome(event) {
    return setNome(event.target.value);
  }

  function handleChangeCpf(event) {
    return setCpf(cpfMask(event.target.value));
  }

  function handleChangesalario(event) {
    return setSalario(moneyMask(numberMask(event.target.value)));
  }

  function handleChangedependentes(event) {
    return setDependentes(numberMask(event.target.value));
  }

  function targetValueINSS() {
    const valueINSS = calculateINSS(
      parseFloat(salario.replace(/[^\d,]+/g, "").replace(",", ".")),
    );

    setDesconto(Number(valueINSS));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isEdit) {
      return dispatch(
        updateEmployee({
          id: Number(params.id),
          nome,
          cpf,
          salario: parseFloat(
            salario.replace(/[^\d,]+/g, "").replace(",", "."),
          ),
          desconto: Number(desconto),
          dependentes: Number(dependentes),
        }),
      );
    }

    dispatch(
      addEmployee({
        id: employees[employees.length - 1].id + 1,
        nome,
        cpf,
        salario: parseFloat(salario.replace(/[^\d,]+/g, "").replace(",", ".")),
        desconto: Number(desconto),
        dependentes: Number(dependentes),
      }),
    );

    cleanInputs();
  }

  function validateForm() {
    if (!nome) {
      setDisabled(true);
      return;
    }

    if (!cpf) {
      setDisabled(true);
      return;
    }

    if(salario === "R$ NaN"){
      setSalario("")
      setDisabled(true);
      return;
    }

    if (!salario || salario === "R$ 0,00") {
      setDisabled(true);
      return;
    }

    setDisabled(false);
  }

  function cleanInputs() {
    setNome("")
    setCpf("")
    setSalario("")
    setDesconto(0)
    setDependentes(0)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Nome" value={nome} onChange={handleChangeNome} />
      <Input placeholder="CPF" value={cpf} onChange={handleChangeCpf} />
      <Input
        placeholder="Salário"
        value={salario}
        onChange={handleChangesalario}
        min="0"
      />
      <Input
        placeholder="Dependentes"
        value={dependentes}
        onChange={handleChangedependentes}
        type="number"
        min="0"
      />

      <Button type="submit" disabled={disabled}>
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
