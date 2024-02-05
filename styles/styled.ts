// This is like the extension from the styled-components file (OOP)
import 'styled-components';

type WallpaperEffect = (element: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      fileEntry: {
        background: string;
        border: string;
        text: string;
        textShadow: string;
      };
      highlight: string;
      startButton: string;
      taskbar: {
        background: string;
        hover: string;
      };
      text: string;
      titlebar: {
        background: string;
        backgroundHover: string;
        closeHover: string;
        text: string;
      };
      window: {
        background: string;
        outline: string;
        shadow: string;
      };
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
      fileEntry: {
        fontSize: string;
        iconSize: string;
        letterSpacing: string;
      };
      fileManager: {
        columnGap: string;
        gridEntryHeight: string;
        gridEntryWidth: string;
        padding: string;
        rowGap: string;
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
      titlebar: {
        buttonIconWidth: string;
        buttonWidth: string;
        fontSize: string;
        height: string;
        iconMargin: string;
        iconSize: string;
      };
      window: {
        lineHeight: string;
        outline: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
