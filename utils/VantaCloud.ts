import * as THREE from 'three';
/* @ts-expect-error No declaration file is required*/
import CLOUDS from 'vanta/dist/vanta.fog.min.js';
import { VantaSettings, WallpaperEffect } from 'types/styles/wallpaper';

const disableControl = {
  mouseControls: false,
  touchControls: false
};
const vantaCloud = (setting: VantaSettings): WallpaperEffect => (desktopRef: React.RefObject<HTMLElement>) => {
    const vantaEffect = CLOUDS({
      el: desktopRef.current,
      THREE,
      ...disableControl,
      ...setting
    });

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default vantaCloud;
