import { useSelector } from "react-redux";
import { formatBRL } from "../../../helper/formatCurrency";
import { useEmployees } from "../../../redux/sliceEmployees";
import { Container, Table, Td, Th, Tr } from "./styles";

const ListingEmployees = () => {
  const employees = useSelector(useEmployees);
  console.log(employees);
  return (
    <Container>
      <Table>
        <Tr>
          <Th>Nome</Th>
          <Th>CPF</Th>
          <Th>Salário</Th>
          <Th>Desconto</Th>
          <Th>Dependentes</Th>
          <Th>Desconto IRPF</Th>
        </Tr>
        {employees.map((item) => (
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
