import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';
import Button from 'styles/common/Button';

const StyledStartButton = styled(Button)`
  ${centered}
  fill: ${({ theme }) => theme.colors.startButton};
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};

  svg {
    height: 19px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};

    svg {
      fill: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export default StyledStartButton;
