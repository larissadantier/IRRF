import { useSelector } from "react-redux";
import { formatBRL } from "../../../helper/formatCurrency";
import { Container, Table, Td, Th, Title, Tr } from "./styles";

const ListingEmployees = () => {
  const employeesList = useSelector((state) => state.employees.value);
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
        </Tr>
        {employeesList.map((item) => (
          <Tr key={item.nome}>
            <Td>{item.nome}</Td>
            <Td>{item.cpf}</Td>
            <Td>{formatBRL(item.salario)}</Td>
            <Td>{formatBRL(item.desconto)}</Td>
            <Td>{item.dependentes}</Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default ListingEmployees;
