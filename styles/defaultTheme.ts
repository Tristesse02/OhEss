import vantaCloud from 'utils/VantaCloud';
import { DefaultTheme } from 'styled-components';
import { getBackgroundColors } from 'utils/getBGCol';
import { backgroundChoices } from 'Collection/backgroundChoice';

const colors = {
  backgroundColor: '#db60d3',
  clockText: 'rgba(255, 255, 255, 0.8)',
  primary: '#000',
  startButton: '#FFFFFF',
  taskbar: 'rgba(0, 0, 0, 0.69)',
  window: '#808080'
};

const sizes = {
  clock: {
    fontSize: '12px',
    width: '76px'
  },
  startButton: {
    iconSize: '16.5px',
    width: '36px'
  },
  taskbar: {
    blur: '8px',
    entry: {
      maxWidth: '161px'
    },
    height: '30px'
  }
};

const wallpaper = vantaCloud(
  getBackgroundColors(backgroundChoices, 'mystical_twilight')
);

const defaultTheme: DefaultTheme = { colors, sizes, wallpaper };

export default defaultTheme;
