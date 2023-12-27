import type { FC } from "react";
import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "contexts/session";
import type { StyledAppProps } from "@/types/components/pages/StyledApp";

const StyledApp: FC<StyledAppProps> = ({
  children,
  currentTheme
}): React.JSX.Element => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = currentTheme }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
