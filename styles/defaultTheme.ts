import vantaCloud from 'utils/VantaCloud';
import { getBackgroundColors } from 'utils/getBGCol';
import { backgroundChoices } from 'Collection/backgroundChoice';

const colors = {
  backgroundColor: '#db60d3',
  primary: '#000',
  window: '#808080'
};

const wallpaper = vantaCloud(
  getBackgroundColors(backgroundChoices, 'mystical_twilight')
);

const defaultTheme = { colors, wallpaper };

export default defaultTheme;
