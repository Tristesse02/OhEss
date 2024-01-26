import React from "react";
import themes from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "contexts/session";

const StyledApp = ({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element => (
  <SessionConsumer>
    {({ themeName }) => (
      /* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */
      <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    )}
  </SessionConsumer>
);

export default StyledApp;
