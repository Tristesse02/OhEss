import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Title;
