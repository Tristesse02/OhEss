import { contextFactory } from "../utils/contextFactory";
import useFileSystemContextState from "hooks/useFileSystemContextState";
import { initialFileSystemContextState } from "utils/initialContextStates";
import type { FileSystemContextState } from "hooks/useFileSystemContextState";

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
