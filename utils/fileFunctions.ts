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
    case '.img':
    case '.iso':
      return 'icons/image.ico';
    default:
      return 'icons/unknown.ico';
  }
};

export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    default:
      return '';
  }
};

export const loadScript = (src: string, callback: () => void): void => {
  const script = document.createElement('script');

  script.src = src;
  script.onload = () => {
    callback?.();
  };

  document.head.appendChild(script);
};

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(new Blob([new Uint8Array(buffer)]));
