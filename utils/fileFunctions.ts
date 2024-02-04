import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

interface Shortcut {
  BaseURL: string;
  IconFile: string;
  URL: string;
}

export const getShortcut = async (
  path: string,
  fs: FSModule
): Promise<Shortcut> =>
  await new Promise((resolve) => {
    fs.readFile(path, (_error, contents = Buffer.from('')) => {
      const { InternetShortcut = { BaseURL: '', IconFile: '', URL: '' } } =
        ini.parse(contents.toString());

      resolve(InternetShortcut as Shortcut);
    });
  });

export const getIconByFileExtension = (_extension: string): string => {
  switch (_extension) {
    default:
      return 'icons/unknown.ico';
  }
};

export const getProcessByFileExtension = (_extension: string): string => {
  return '';
};
