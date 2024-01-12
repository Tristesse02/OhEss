// This is like the extension from the styled-components file (OOP)
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      window: string;
    };
  }
}
