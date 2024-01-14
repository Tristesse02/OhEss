export type VantaSettings = {
  baseColor: number;
  highlightColor: number;
  midtoneColor: number;
  lowlightColor: number;
};

export type WallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => () => void;
