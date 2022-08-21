import { Nav, StyledLink } from "./styles";

const Header = () => {
  return (
    <Nav>
      <StyledLink to="/">Registrar funcionário</StyledLink>
      <StyledLink to="employees">Tabelas e cálculos do IRRF</StyledLink>
    </Nav>
  );
};

export default Header;
