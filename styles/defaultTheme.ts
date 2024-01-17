import vantaCloud from 'utils/VantaCloud';
import { getBackgroundColors } from 'utils/getBGCol';
import { backgroundChoices } from 'Collection/backgroundChoice';

const colors = {
  backgroundColor: '#db60d3',
  primary: '#000',
  window: '#808080'
};

const size = {
  clock: {
    width: '90px'
  },
  startButton: {
    width: '30px'
  },
  taskbar: {
    entry: {
      width: '80px'
    },
    height: '30px'
  }
};

const wallpaper = vantaCloud(
  getBackgroundColors(backgroundChoices, 'mystical_twilight')
);

const defaultTheme = { colors, size, wallpaper };

export default defaultTheme;
