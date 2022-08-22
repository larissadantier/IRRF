import FormGroup from "../../../components/FormGroup";
import { Container, Title } from "./styles";

const UpdateEmployee = () => {
  return (
    <Container>
      <Title>Atualizar Funcionário</Title>
      <FormGroup isEdit />
    </Container>
  );
};

export default UpdateEmployee;
