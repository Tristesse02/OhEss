import React from "react";
import FileEntry from "./FileEntry";
import useFiles from "hooks/useFiles";
import { basename, extname, resolve } from "path";
import StyledFileManager from "styles/components/system/Files/StyledFileManager";
import useFileDrop from "hooks/useFileDrop";

interface FileManagerProps {
  directory: string;
}

/**
 * The function that renders the file manager.
 * @param param0
 * @returns
 */
const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  const { files, getFiles } = useFiles(directory);

  return (
    <StyledFileManager {...useFileDrop(directory, getFiles)}>
      {files.map((file) => (
        <FileEntry
          key={file}
          name={basename(file, extname(file))}
          path={resolve(directory, file)}
        />
      ))}
    </StyledFileManager>
  );
};

export default FileManager;
