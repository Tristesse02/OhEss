import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const { wallpaper } = useContext(ThemeContext) as DefaultTheme;

  useEffect(() => {
    wallpaper?.(desktopRef);
  }, [wallpaper, desktopRef]);
};

export default useWallpaper;
