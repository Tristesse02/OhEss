import { VantaSettings } from 'types/styles/wallpaper';

export function getBackgroundColors(
  backgroundChoices: any,
  backgroundName: string
): VantaSettings {
  const val = backgroundChoices[backgroundName];
  const ret = {
    baseColor: val[0],
    highlightColor: val[1],
    midtoneColor: val[2],
    lowlightColor: val[3]
  };
  return ret as VantaSettings;
}
