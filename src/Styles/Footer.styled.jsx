import styled from "styled-components";
import Flex from "./Flex.styled";

const FooterContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.color.first};
  color: ${({ theme }) => theme.color.second};
  height: 5rem;
  position: fixed;
  width: 100%;
  bottom: 0;
  flex-direction: column;
`;

export const FooterIcon = styled.a`
  font-size: 1.7rem;
  color: white;
  margin: 0.5rem;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: black;
  }
`;

export const FooterIconLinkedin = styled(FooterIcon)`
  &:hover {
    color: #0a66c2;
  }
`;

export default FooterContainer;
