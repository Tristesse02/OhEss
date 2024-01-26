import { useEffect, useState } from 'react';
import { configure, BFSRequire } from 'browserfs';
import FileSystemConfig from 'utils/fileSystemConfig';
import type { FSModule } from 'browserfs/dist/node/core/FS';

export interface FileSystemContextState {
  fs: FSModule | null;
}

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = useState<FSModule | null>(null);

  useEffect(() => {
    if (fs === null) {
      configure(FileSystemConfig, () => {
        setFs(BFSRequire('fs'));
      });
    }
  }, [fs]);

  return { fs };
};

export default useFileSystemContextState;
