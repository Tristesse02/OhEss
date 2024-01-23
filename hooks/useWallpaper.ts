import { useEffect } from 'react';
import { useTheme } from 'styled-components';

const useWallpaper = (
  desktopRef: React.RefObject<HTMLElement | null>
): void => {
  const { wallpaper } = useTheme();

  useEffect(() => {
    wallpaper?.(desktopRef.current as HTMLElement);
  }, [wallpaper, desktopRef]);
};

export default useWallpaper;
