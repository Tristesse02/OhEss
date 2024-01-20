import * as BrowserFS from 'browserfs';
import { useEffect, useState } from 'react';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import FileSystemContextState from 'types/contexts/fileSystem';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: 'IndexedDB'
      },
      () => {
        setFs(BrowserFS.BFSRequire('fs'));
      }
    );
  }, [setFs]);

  return { fs };
};

export default useFileSystemContextState;
