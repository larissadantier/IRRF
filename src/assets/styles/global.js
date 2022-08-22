import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #e9ecef;
  font-size: 1rem;
}

button {
    cursor: pointer;
  }

`;
