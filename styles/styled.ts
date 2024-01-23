// This is like the extension from the styled-components file (OOP)
import 'styled-components';
import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      highlight: string;
      opaqueWhite: string;
      primary: string;
      startButton: string;
      taskbar: string;
      window: string;
      taskbarHover: string;
    };
    formats: {
      date: Intl.DateTimeFormatOptions;
      time: Intl.DateTimeFormatOptions;
    };
    sizes: {
      clock: {
        fontSize: string;
        width: string;
      };
      startButton: {
        iconSize: string;
        width: string;
      };
      taskbar: {
        blur: string;
        entry: {
          borderSize: string;
          fontSize: string;
          icon: {
            margin: string;
            size: string;
          };
          maxWidth: string;
        };
        height: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
