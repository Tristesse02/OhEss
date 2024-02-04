import { useFileSystem } from 'contexts/fileSystem';
import { useCallback } from 'react';

const haltDragEvent = (event: React.DragEvent<HTMLElement>): void => {
  event.preventDefault();
  event.stopPropagation();
};

interface FileDrop {
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
}

const useFileDrop = (directory: string, getFiles: () => void): FileDrop => {
  const { fs } = useFileSystem();
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      haltDragEvent(event);

      const file = event.dataTransfer?.files[0];
      if (!file) {
        console.error('No file was dropped');
        return;
      }

      const reader = new FileReader();

      reader.onload = ({ target }) => {
        fs?.writeFile(
          `${directory}/${file.name}`,
          Buffer.from(new Uint8Array(target?.result as ArrayBuffer)),
          getFiles
        );
      };

      reader.readAsText(file); // Or readAsArrayBuffer, based on the file type
    },
    [directory, fs, getFiles]
  );

  return {
    onDragOver: haltDragEvent,
    onDrop
  };
};

export default useFileDrop;
