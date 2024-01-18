import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledTaskbarEntry = styled.li`
  ${centered}
  background-color: pink;
  height: 100%;
  width: ${({ theme }) => theme.size.taskbar.entry.width};
`;

export default StyledTaskbarEntry;
