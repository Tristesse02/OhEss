import { styled } from 'styled-components';

// creating styled components using 'styled' function from the 'styled-components' library
// https://chat.openai.com/share/d1bd0b48-a3fd-494f-85f3-d55c8ce2329a
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Title;
