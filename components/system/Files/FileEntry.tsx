import React, { useCallback } from "react";
import useFileInfo from "hooks/useFileInfo";
import { useProcesses } from "contexts/process";
import StyledFileEntry from "styles/components/system/Files/StyledFileEntry";

interface FileEntryProps {
  name: string;
  path: string;
}

/**
 * The function that renders the file entry.
 * @param param0
 * @returns
 */
const FileEntry = ({ name, path }: FileEntryProps): JSX.Element => {
  const { icon, pid } = useFileInfo(path);
  const { open, close } = useProcesses();
  const onActivate = useCallback(() => {
    console.log("huh?", pid);
    open(pid);
  }, [pid, open]);

  const onDeactivate = useCallback(() => {
    close(pid);
  }, [pid, close]);

  return (
    <StyledFileEntry>
      <button type="button" onDoubleClick={onActivate} onClick={onDeactivate}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{pid}</figcaption>{" "}
          {/* should have been {name} instead of pid */}
        </figure>
      </button>
    </StyledFileEntry>
  );
};

export default FileEntry;
