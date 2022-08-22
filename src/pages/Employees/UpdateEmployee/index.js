import FormGroup from "../../../components/FormGroup";
import { Container, Title } from "./styles";

const UpdateEmployee = () => {
  return (
    <Container>
      <Title>Formulário de atualização</Title>
      <FormGroup isEdit />
    </Container>
  );
};

export default UpdateEmployee;
