import { FC } from "react";
import defaultTheme from "@/styles/theme.json";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { StyledAppProps } from "@/types/components/pages/StyledApp";

const StyledApp: FC<StyledAppProps> = ({
  children,
  theme = defaultTheme.default
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <body>{children}</body>
    </ThemeProvider>
  </>
);

export default StyledApp;
