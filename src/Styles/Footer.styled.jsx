import styled from "styled-components";
import Flex from "./Flex.styled";

const FooterContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.color.first};
  color: ${({ theme }) => theme.color.second};
  height: 5rem;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export default FooterContainer;
