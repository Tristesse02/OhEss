import React from "react";
import type { FC } from "react";
import themes from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { SessionConsumer } from "contexts/session";
import type { StyledAppProps } from "types/components/pages/StyledApp";

const StyledApp: FC<StyledAppProps> = ({ children }): React.JSX.Element => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ themeName }) => (
        /* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */
        <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
          {children}
        </ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
