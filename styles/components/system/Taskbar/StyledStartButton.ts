import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledStartButton = styled.button`
  ${centered}
  background-color: red;
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.size.startButton.width};
`;

export default StyledStartButton;
