import * as THREE from 'three';
/* @ts-expect-error No declaration file is required */
import CLOUDS from 'vanta/dist/vanta.fog.min.js';
import type { VantaSettings, WallpaperEffect } from 'types/styles/wallpaper';

const disableControl = {
  mouseControls: false,
  touchControls: false
};

const isWebGLAvailable = typeof WebGLRenderingContext !== 'undefined';

const vantaCloud =
  (setting: VantaSettings): WallpaperEffect =>
  (element) => {
    const vantaEffect =
      element !== null && isWebGLAvailable
        ? CLOUDS({
            el: element,
            THREE,
            ...disableControl,
            ...setting
          })
        : 'undefined';

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default vantaCloud;
