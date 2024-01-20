import styled from 'styled-components';
import { centered } from '../../../GlobalTaskbarStyle';

const StyledTaskbarEntry = styled.li`
  ${centered}
  max-width: ${({ theme }) => theme.size.taskbar.entry.maxWidth};
  height: 100%;
`;

export default StyledTaskbarEntry;
