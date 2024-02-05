import { useFileSystem } from 'contexts/fileSystem';
import { useCallback, useEffect, useState } from 'react';

interface Files {
  files: string[];
  getFiles: () => void;
}

/**
 * The function that reads the files in a directory and returns an array of JSX elements.
 * @param directory
 * @param callback
 * @returns
 */
const useFiles = (directory: string): Files => {
  const [files, setFiles] = useState<string[]>([]);
  const { fs } = useFileSystem();
  const getFiles = useCallback(() => {
    if (fs !== null) {
      fs.readdir(directory, (_error, contents = []) => {
        setFiles(contents);
      });
    }
  }, [directory, fs]);

  useEffect(getFiles, [getFiles]);

  return { files, getFiles };
};

export default useFiles;
