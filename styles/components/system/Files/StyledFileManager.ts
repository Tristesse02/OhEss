import styled from 'styled-components';

const StyledFileManager = styled.ol`
  column-gap: ${({ theme }) => theme.sizes.fileManager.columnGap};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryHeight})`};
  grid-template-rows: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryWidth})`};
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};
`;

export default StyledFileManager;
