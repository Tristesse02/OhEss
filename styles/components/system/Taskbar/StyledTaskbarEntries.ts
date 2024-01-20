import styled from 'styled-components';

const StyledTaskbarEntries = styled.ol`
  height: 100%;
  left: ${({ theme }) => theme.size.startButton.width};
  position: absolute;
  right: ${({ theme }) => theme.size.clock.width};
`;

export default StyledTaskbarEntries;
