import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledClock = styled.time`
  ${centered}
  color: ${({ theme }) => theme.colors.clockText};
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  height: 100%;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
