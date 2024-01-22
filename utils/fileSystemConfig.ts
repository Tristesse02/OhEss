import type { FileSystemConfiguration } from 'browserfs';
import publicFileSystemIndex from 'public.json';

const FileSystemConfig: FileSystemConfiguration = {
  fs: 'OverlayFS',
  options: {
    readable: {
      fs: 'XmlHttpRequest',
      option: {
        index: publicFileSystemIndex
      }
    },
    writable: {
      fs: 'IndexedDB',
      option: {
        storeName: 'browser-fs-cache'
      }
    }
  }
};

export default FileSystemConfig;
