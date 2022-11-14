import styled from "styled-components";

const FormContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 2.5rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.first};
  color: ${({ theme }) => theme.color.second};
  width: 20rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline-color: #203a43;
`;

export const Submit = styled.button`
  width: 6rem;
  background-color: ${({ theme }) => theme.color.first};
`;

export default FormContainer;
