import styled from 'styled-components';

const StyledClock = styled.time`
  background-color: green;
  height: 100%;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.size.clock.width};
`;

export default StyledClock;
