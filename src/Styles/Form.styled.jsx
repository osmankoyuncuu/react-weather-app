import styled from "styled-components";

const FormContainer = styled.form`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.xsmall}) {
    flex-direction: column;
    margin: 3rem 0.5rem 2rem 0.5rem;
    gap: 0.5rem;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.first};
  color: ${({ theme }) => theme.color.second};
  width: 20rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  border-radius: 0.5rem;
  border: none;
  outline-color: ${({ theme }) => theme.color.first};
  @media (max-width: ${({ theme }) => theme.responsive.xsmall}) {
    width: 100%;
    padding: 0.5rem 1rem;
  }
`;

export const Submit = styled.button`
  width: 6rem;
  background-color: ${({ theme }) => theme.color.first};
  @media (max-width: ${({ theme }) => theme.responsive.xsmall}) {
    width: 100%;
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.second};
`;

export default FormContainer;
