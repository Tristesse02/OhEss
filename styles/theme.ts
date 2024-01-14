import vantaCloud from 'utils/VantaCloud';
import type { Themes } from 'types/styles/themes';

const backgroundChoices = {
  nature_inspired: [0xffebeb, 0xbab86c, 0x8a3324, 0x228b22],
  pastel: [0xfffdd0, 0xff7f50, 0x40e0d0, 0x191970],
  autumn_splendor: [0xf5deb3, 0x800000, 0xffd700, 0x556b2f],
  vintage_elegance: [0xfaebd7, 0x008080, 0xa0522d, 0x4b0082],
  winter_wonderland: [0xfffafa, 0x4682b4, 0xafeeee, 0x191970],
  monochromatic_blue: [0xf0f8ff, 0x87ceeb, 0x4169e1, 0x000080],
  desert_dusk: [0xf5f5dc, 0xe9967a, 0xb8860b, 0x696969],
  modern_retro: [0xdcdcdc, 0x7fff00, 0xff6347, 0x6a5acd],
  calm_and_collected: [0xfff0f5, 0x2e8b57, 0xcd5c5c, 0x5f9ea0],
  earthy_tones: [0xfaf0e6, 0xbdb76b, 0xcd853f, 0x6b8e23],
  soft_and_subtle: [0xf8f8ff, 0xd8bfd8, 0xbc8f8f, 0x6495ed],
  mystical_twilight: [0xe6e6fa, 0xda70d6, 0x87ceeb, 0x191970],
  enchanted_evening: [0xc9a0dc, 0xfc0fc0, 0x007ba7, 0x000080],
  dreamy_spectrum: [0xd8bfd8, 0xff69b4, 0xb0e0e6, 0x483d8b],
  pastel_serenity: [0xfadadd, 0xe29cd2, 0x89cff0, 0x301934]
};
function getBackgroundColors(backgroundChoices: any, backgroundName: string) {
  const val = backgroundChoices[backgroundName];
  return {
    baseColor: val[0],
    highlightColor: val[1],
    midtoneColor: val[2],
    lowlightColor: val[3]
  };
}
const defaultTheme = {
  colors: {
    backgroundColor: '#db60d3',
    primary: '#000',
    window: '#808080'
  },
  wallpaper: vantaCloud(
    getBackgroundColors(backgroundChoices, 'mystical_twilight')
  )
};
const themes: Themes = { defaultTheme };

export default themes;
