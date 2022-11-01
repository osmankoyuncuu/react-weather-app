import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 2.5rem;
`;

export const Input = styled.input`
  width: 20rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline-color: #a7a7ff;
`;

export const Submit = styled.button`
  width: 6rem;
  background-color: green;
`;

export default FormContainer;
