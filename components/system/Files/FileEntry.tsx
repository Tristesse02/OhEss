import Image from "styles/common/Image";
import Button from "styles/common/Button";
import React, { useCallback } from "react";
import useFileInfo from "hooks/useFileInfo";
import { useProcesses } from "contexts/process";
import useDoubleClick from "hooks/useDoubleClick";
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
  const { open } = useProcesses();

  const onClick = useCallback(() => {
    // console.log("huh?", pid);
    open(pid);
  }, [pid, open]);

  // const onDeactivate = useCallback(() => {
  //   close(pid);
  // }, [pid, close]);
  return (
    <StyledFileEntry>
      <Button onClick={useDoubleClick(onClick)}>
        <figure>
          <Image src={icon} alt={name} />
          <figcaption>{name}</figcaption>{" "}
          {/* should have been {name} instead of pid */}
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
