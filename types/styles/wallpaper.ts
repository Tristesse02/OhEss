export interface VantaSettings {
  baseColor: number;
  highlightColor: number;
  midtoneColor: number;
  lowlightColor: number;
}

export type WallpaperEffect = (element: HTMLElement | null) => () => void;
