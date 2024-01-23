import { contextFactory } from "../utils/contextFactory";
import type { FileSystemContextState } from "types/contexts/fileSystem";
import useFileSystemContextState from "hooks/useFileSystemContextState";
import { initialFileSystemContextState } from "utils/initialContextStates";

const { Consumer, Provider, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};
