import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledStartButton = styled.button.attrs(() => ({
  type: 'button'
}))`
  ${centered}
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.size.startButton.width};
`;

export default StyledStartButton;
