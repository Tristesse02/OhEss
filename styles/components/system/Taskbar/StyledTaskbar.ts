import styled from 'styled-components';

const StyledTaskbar = styled.nav`
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  background-color: ${({ theme }) => theme.colors.taskbar};
  bottom: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: absolute !important;
  right: 0;
  width: 100vw;
`;

export default StyledTaskbar;
