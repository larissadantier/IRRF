import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background-color: #222;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  & + & {
    margin-left: 2rem;
  }
`;
