import styled from "styled-components";
import Flex from "./Flex.styled";

const DetailContainer = styled(Flex)`
  margin: 1rem 0;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled(Flex)`
  border: 2px solid ${({ theme }) => theme.color.first};
  width: 20rem;
  height: 29rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.first};
  color: white;
  overflow: auto;
  position: relative;
  padding-top: 1rem;
`;

export const Button = styled.button`
  position: absolute;
  font-size: 1.2rem;
  right: 8px;
  top: 0;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.color.first};
`;

export const Super = styled.sup`
  font-size: 0.9rem;
`;

export default DetailContainer;
