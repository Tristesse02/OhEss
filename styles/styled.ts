// This is like the extension from the styled-components file (OOP)
import 'styled-components';
import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      taskbar: string;
      window: string;
    };
    fonts: {
      clock: {
        size: string;
      };
    };
    size: {
      clock: {
        width: string;
      };
      startButton: {
        width: string;
      };
      taskbar: {
        entry: {
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
