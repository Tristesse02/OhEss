import * as THREE from 'three';
/* @ts-expect-error No declaration file is required */
import CLOUDS from 'vanta/dist/vanta.fog.min.js';

// Type/Interface definitions
type WallpaperEffect = (element: HTMLElement | null) => () => void;

interface VantaSettings {
  baseColor: number;
  highlightColor: number;
  midtoneColor: number;
  lowlightColor: number;
}

// Functions and constants
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
