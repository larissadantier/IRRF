import { useDispatch, useSelector } from "react-redux";
import { calculateIRRF } from "../../../helper/calculateIRRF";
import { formatBRL } from "../../../helper/formatCurrency";
import { deleteEmployee } from "../../../redux/sliceEmployees";
import {
  Wrapper,
  Button,
  Container,
  Table,
  Td,
  Th,
  Title,
  Tr,
  StyledLink,
} from "./styles";

const ListingEmployees = () => {
  const employeesList = useSelector((state) => state.employees.value);

  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Seus Funcionários</Title>
      <Table>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Salário</Th>
          <Th>Desconto</Th>
          <Th>Dependentes</Th>
          <Th>Desconto IRPF</Th>
          <Th>Ações</Th>
        </Tr>
        {employeesList.map((item) => (
          <Tr key={item.id}>
            <Td>{item.nome}</Td>
            <Td>{item.cpf}</Td>
            <Td>{formatBRL(item.salario)}</Td>
            <Td>{formatBRL(item.desconto)}</Td>
            <Td>{item.dependentes}</Td>
            <Td>
              {calculateIRRF(item.salario, item.desconto, item.dependentes)}
            </Td>
            <Td>
              <Wrapper>
                <StyledLink to={`/employees/${item.id}`}>Editar</StyledLink>

                <Button
                  onClick={() => {
                    dispatch(deleteEmployee({ id: item.id }));
                  }}
                >
                  X
                </Button>
              </Wrapper>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default ListingEmployees;
