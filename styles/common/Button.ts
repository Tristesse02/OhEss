import styled from 'styled-components';

const Button = styled.button.attrs(() => ({ type: 'button', title: 'Start' }))`
  background-color: transparent;
  font-family: inherit;
`;

export default Button;
