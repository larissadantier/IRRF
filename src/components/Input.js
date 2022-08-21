import styled from "styled-components";

export default styled.input`
  width: 100%;
  height: 42px;
  padding: 0 16px;
  background: #f8f9fa;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 2px solid #e9ecef;
  outline: 0;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  & + & {
    margin-top: 1rem;
  }

  &:focus {
    border-color: #ced4da;
  }
  &[disabled] {
    background-color: #e9ecef;
    border-color: #adb5bd;
  }
`;
