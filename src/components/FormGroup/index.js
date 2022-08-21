import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { calculateINSS } from "../../helper/calculateINSS";
import { cpfMask, moneyMask } from "../../helper/maskValue";

import { addEmployee } from "../../redux/sliceEmployees";
import Input from "../Input";
import { Form, Button } from "./styles";
const FormGroup = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [salario, setSalario] = useState("");
  const [desconto, setDesconto] = useState(0);
  const [dependentes, setDependentes] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    targetValueINSS();
  }, [salario]);

  function handleChangeNome(event) {
    return setNome(event.target.value);
  }

  function handleChangeCpf(event) {
    return setCpf(cpfMask(event.target.value));
  }

  function handleChangesalario(event) {
    const { value } = event.target;

    if (isNaN(value)) {
      setSalario("");
    }

    if (toString(value)) {
      setSalario("");
    }

    return setSalario(moneyMask(event.target.value));
  }

  function handleChangedependentes(event) {
    return setDependentes(event.target.value);
  }

  function targetValueINSS() {
    const valueINSS = calculateINSS(
      parseFloat(salario.replace(/[^\d,]+/g, "").replace(",", ".")),
    );

    setDesconto(Number(valueINSS));
  }

  return (
    <Form>
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

      <Button
        type="submit"
        onClick={() => {
          dispatch(
            addEmployee({
              nome,
              cpf,
              salario: parseFloat(
                salario.replace(/[^\d,]+/g, "").replace(",", "."),
              ),
              desconto,
              dependentes,
            }),
          );
        }}
      >
        Criar novo funcionário
      </Button>
    </Form>
  );
};

export default FormGroup;
