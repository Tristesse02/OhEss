import React from "react";
import themes from "styles/theme.json";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "contexts/session";

const StyledApp = ({ children }: any): React.JSX.Element => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.default }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
