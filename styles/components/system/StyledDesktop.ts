import styled from 'styled-components';

const StyledDesktop = styled.main`
  background-color: ${({ theme }) =>
    theme.colors.backgroundColor}; // Got theme from ThemeProvider
  bottom: 0;
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100vw;
`;

export default StyledDesktop;
