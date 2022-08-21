import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  margin-top: 1rem;
`;

export const Button = styled.button`
  height: 40px;
  color: #fff;
  background-color: #495057;
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin: 0.75rem 0 0 auto;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: #222;
  }
`;
