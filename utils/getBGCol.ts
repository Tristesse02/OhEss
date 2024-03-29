import type { VantaSettings } from './VantaCloud';
import type { BackgroundChoice } from 'Collection/backgroundChoice';

export function getBackgroundColors(
  backgroundChoices: BackgroundChoice,
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
