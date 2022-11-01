import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "./Flex.styled";

const NavbarContainer = styled(Flex)`
  background-image: linear-gradient(90deg, #2c5364, #203a43, #0f2027);
  justify-content: space-between;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.color.first};
  font-size: 1.3rem;
`;

export const NavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.first};
  padding-left: 2rem;
  text-decoration: none;
`;

export default NavbarContainer;
