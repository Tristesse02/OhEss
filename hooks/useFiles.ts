import { useFileSystem } from 'contexts/fileSystem';
import { useEffect, useState } from 'react';

/**
 * The function that reads the files in a directory and returns an array of JSX elements.
 * @param directory
 * @param callback
 * @returns
 */
const useFiles = (
  directory: string,
  callback: (file: string) => JSX.Element
): JSX.Element[] => {
  const [files, setFiles] = useState<string[]>([]);
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs !== null) {
      fs.readdir(directory, (_error, contents = []) => {
        setFiles(contents);
      });
    }
  }, [directory, fs]);

  return files.map(callback);
};

export default useFiles;
