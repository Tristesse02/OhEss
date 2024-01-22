import vantaCloud from 'utils/VantaCloud';
import type { DefaultTheme } from 'styled-components';
import { getBackgroundColors } from 'utils/getBGCol';
import { backgroundChoices } from 'Collection/backgroundChoice';

const colors = {
  backgroundColor: '#db60d3',
  highlight: '#76b9ED',
  opaqueWhite: 'rgba(255, 255, 255, 0.8)',
  primary: '#000',
  startButton: '#FFFFFF',
  taskbar: 'rgba(0, 0, 0, 0.69)',
  window: '#808080'
};

const formats = {
  date: {
    weekday: 'long' as const,
    month: 'long' as const,
    day: 'numeric' as const,
    year: 'numeric' as const
  },
  time: {
    hour: 'numeric' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
    hour12: true
  }
};

const sizes = {
  clock: {
    fontSize: '12px',
    width: '76px'
  },
  startButton: {
    iconSize: '19px',
    width: '36px'
  },
  taskbar: {
    blur: '8px',
    entry: {
      borderSize: '2px',
      fontSize: '12px',
      icon: {
        margin: '0 5px',
        size: '16px'
      },
      maxWidth: '161px'
    },
    height: '30px'
  }
};

const wallpaper = vantaCloud(
  getBackgroundColors(backgroundChoices, 'mystical_twilight')
);

const defaultTheme: DefaultTheme = { colors, formats, sizes, wallpaper };

export default defaultTheme;
