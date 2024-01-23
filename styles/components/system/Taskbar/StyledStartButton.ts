import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledStartButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  ${centered}
  color: ${({ theme }) => theme.colors.startButton};
  font-size: ${({ theme }) => theme.sizes.startButton.iconSize};
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};

    svg {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
