import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-color: ${({ theme }) => theme.color.third};
  height:100vh;
}

button{
  cursor: grab;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border:none;
  &:active{
    cursor:grabbing;
    transform:scale(0.95);
  }
  &:hover{
    opacity:0.8;
  }
}
`;
