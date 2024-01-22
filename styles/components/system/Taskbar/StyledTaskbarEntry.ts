import styled from 'styled-components';

const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) =>
    `${theme.sizes.taskbar.entry.borderSize} solid ${theme.colors.highlight}`};
  display: flex;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  height: 100%;

  figure {
    align-items: center;
    display: flex;

    figcaption {
      color: ${({ theme }) => theme.colors.opaqueWhite};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    }

    img {
      height: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }
  }
`;

export default StyledTaskbarEntry;
