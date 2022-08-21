import Input from "../Input";
import { Form, Button } from "./styles";
const FormGroup = () => {
  return (
    <Form>
      <Input placeholder="Nome" />
      <Input placeholder="CPF" />
      <Input placeholder="Salário" />
      <Input placeholder="Desconto" disabled />
      <Input placeholder="Dependentes" />

      <Button type="submit">Criar novo funcionário</Button>
    </Form>
  );
};

export default FormGroup;
