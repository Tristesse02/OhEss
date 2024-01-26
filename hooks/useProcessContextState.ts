import { useCallback, useState } from 'react';
import type { Process, Processes } from 'utils/processDirectory';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'utils/processFunctions';

// Type/Interface definitions
type ProcessMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export interface ProcessContextState {
  open: (id: string) => void;
  close: (id: string) => void;
  mapProcesses: ProcessMap;
  maximized: (id: string) => void;
  minimized: (id: string) => void;
  processes: Processes;
}

// Function implementation
const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({});

  const mapProcesses = useCallback<ProcessMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  // const contextValue = useMemo(() => ({ processes }), [processes]);
  const close = useCallback((id: string) => {
    setProcesses(closeProcess(id));
  }, []);

  const open = useCallback((id: string) => {
    setProcesses(openProcess(id));
  }, []);

  const maximized = useCallback((id: string) => {
    setProcesses(maximizeProcess(id));
  }, []);

  const minimized = useCallback((id: string) => {
    setProcesses(minimizeProcess(id));
  }, []);

  return { open, close, mapProcesses, maximized, minimized, processes }; // This is what Process provides to its childrens
};

export default useProcessContextState;
