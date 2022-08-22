import { useDispatch, useSelector } from "react-redux";
import { calculateIRRF } from "../../../helper/calculateIRRF";
import { formatBRL } from "../../../helper/formatCurrency";
import { deleteEmployee } from "../../../redux/sliceEmployees";
import {
  Wrapper,
  Button,
  Container,
  Table,
  TBody,
  Td,
  Th,
  SubTitle,
  Tr,
  StyledLink,
  Title,
  Text,
  Header,
} from "./styles";

const ListingEmployees = () => {
  const employeesList = useSelector((state) => state.employees.value);

  const dispatch = useDispatch();

  return (
    <>
      <Header>
        <Title>Tabela e cálculos do IRRF</Title>
        <Text>
          A tabela do IR é um dos principais instrumentos para auxiliar os
          contribuintes na hora de enviar as informações fiscais para a receita.
          Afinal, é nesse documento que constam os alíquotas do Imposto de Renda
        </Text>

        <Text>
          Isso quer dizer que é essa a fonte para você saber qual é o percentual
          que deve ser aplicado sobre os seus rendimentos. Portando, na hora de
          fazer o cálculo e declarar seus rendimentos, ter essa tabela é
          fundamental para que você não envie nenhum dado errado e,
          consequentemente, não caia na malha fina.
        </Text>
      </Header>

      <Container>
        <SubTitle>Seus Funcionários</SubTitle>
        <Table>
          <TBody>
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
          </TBody>
        </Table>
      </Container>
    </>
  );
};

export default ListingEmployees;
