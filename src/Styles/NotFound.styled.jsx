import styled from "styled-components";

const NotFoundContainer = styled.h1`
  width: 100%;
  text-align: center;
  padding-top: 5rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.color.second};
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    padding-top: 2rem;
    font-size: 3rem;
  }
`;

export default NotFoundContainer;
