import styled from "styled-components";
import Flex from "./Flex.styled";

const CityListContainer = styled(Flex)`
  width: 100%;
  padding: 0;
  margin-top: 2rem;
`;

export const Select = styled.select`
  width: 14rem;
  height: 2.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.color.first};
  &:active {
    outline: 2px solid white;
  }
  &:hover {
    outline: 2px solid white;
    cursor: pointer;
  }
`;

export default CityListContainer;
