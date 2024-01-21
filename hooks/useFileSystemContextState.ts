import * as BrowserFS from 'browserfs';
import { useEffect, useState } from 'react';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import type { FileSystemContextState } from 'types/contexts/fileSystem';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'IndexedDB',
        options: {} // Add the options property with an empty object
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, []);

  return { fs };
};

export default useFileSystemContextState;
