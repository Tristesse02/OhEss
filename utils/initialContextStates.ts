import type { SessionContextState } from 'hooks/useSessionContextState';
import type { ProcessContextState } from 'hooks/useProcessContextState';
import type { FileSystemContextState } from 'hooks/useFileSystemContextState';

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  mapProcesses: () => [],
  maximized: () => undefined,
  minimized: () => undefined,
  processes: {}
};
export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialSessionContextState: SessionContextState = {
  setThemeName: () => undefined,
  setWindowStates: () => undefined,
  themeName: '',
  windowStates: {}
};
