import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledClock = styled.time`
  ${centered}
  background-color: green;
  font-size: ${({ theme }) => theme.fonts.clock.size};
  height: 100%;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.size.clock.width};
`;

export default StyledClock;
