import styled from 'styled-components';

export interface StyledWindowProps {
  $minimized?: boolean;
}

const StyledWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window};
  display: ${({ $minimized = false }) =>
    $minimized ?? false ? 'none' : 'block'};
  position: absolute;
`;

export default StyledWindow;
