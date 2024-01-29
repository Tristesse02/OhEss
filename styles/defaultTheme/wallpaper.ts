import vantaCloud from 'utils/VantaCloud';
import { getBackgroundColors } from 'utils/getBGCol';
import { backgroundChoices } from 'Collection/backgroundChoice';

const wallpaper = vantaCloud(
  getBackgroundColors(backgroundChoices, 'mystical_twilight')
);

export default wallpaper;
