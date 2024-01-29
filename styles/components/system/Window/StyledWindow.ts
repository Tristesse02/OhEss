import styled from 'styled-components';

export interface StyledWindowProps {
  $minimized?: boolean;
}

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window.background};
  box-shadow: ${({ theme }) => theme.colors.window.shadow};
  display: ${({ $minimized = false }) =>
    $minimized ?? false ? 'none' : 'block'};
  height: 100%;
  overflow: hidden;
  outline: ${({ theme }) =>
    `${theme.sizes.window.outline} solid ${theme.colors.window.outline}`};
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
