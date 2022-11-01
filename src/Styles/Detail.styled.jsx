import styled from "styled-components";
import Flex from "./Flex.styled";

const DetailContainer = styled(Flex)`
  margin-top: 5rem;
  font-size: 1.2rem;
`;

export const Card = styled(Flex)`
  border: 2px solid #0f2027;
  width: 25rem;
  height: 25rem;
  padding: 1rem;
  justify-content: start;
  flex-direction: column;
  border-radius: 1rem;
  gap: 1rem;
`;
export const Super = styled.sup`
  font-size: 0.9rem;
`;

export default DetailContainer;
