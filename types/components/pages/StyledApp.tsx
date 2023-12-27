import type { DefaultTheme } from "styled-components/dist/types";

export interface StyledAppProps {
  readonly children: React.ReactNode;
  readonly currentTheme: DefaultTheme;
}
