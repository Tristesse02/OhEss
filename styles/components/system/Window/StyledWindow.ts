import styled from 'styled-components';

export interface StyledWindowProps {
  $minimized?: boolean;
}

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  display: ${({ $minimized = false }) =>
    $minimized ?? false ? 'none' : 'block'};
  height: 100%;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
