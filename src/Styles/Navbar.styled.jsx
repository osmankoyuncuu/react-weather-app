import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "./Flex.styled";

const NavbarContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.color.first};
  justify-content: space-between;
  padding: 0 3rem;
  color: ${({ theme }) => theme.color.second};
  font-size: 1.3rem;
  height: 100px;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.responsive.xsmall}) {
    height: auto;
  }
`;

export const NavbarLogo = styled.img`
  cursor: pointer;
  width: 100px;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.second};
  padding-left: 2rem;
  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.responsive.xsmall}) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    align-items: center;
    margin: 0.7rem 0;
  }
`;

export default NavbarContainer;
