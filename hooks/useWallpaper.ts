import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import type { DefaultTheme } from 'styled-components';

const useWallpaper = (
  desktopRef: React.RefObject<HTMLElement | null>
): void => {
  const { wallpaper } = useContext(ThemeContext) as DefaultTheme;

  useEffect(() => {
    wallpaper?.(desktopRef.current as HTMLElement);
  }, [wallpaper, desktopRef]);
};

export default useWallpaper;
