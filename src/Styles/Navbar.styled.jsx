import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "./Flex.styled";

const NavbarContainer = styled(Flex)`
  background-color: #33495f;
  justify-content: space-between;
  padding: 0 3rem;
  color: ${({ theme }) => theme.color.second};
  font-size: 1.3rem;
`;

export const NavbarLogo = styled.img`
  cursor: pointer;
  width: 125px;
`;

export const NavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.second};
  padding-left: 2rem;
  text-decoration: none;
`;

export default NavbarContainer;
