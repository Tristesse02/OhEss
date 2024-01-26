import { useCallback, useState } from 'react';
import type { Process, Processes } from 'utils/processDirectory';
import { closeProcess, openProcess } from 'utils/processFunctions';

// Type/Interface definitions
type ProcessMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export interface ProcessContextState {
  open: (id: string) => void;
  close: (id: string) => void;
  mapProcesses: ProcessMap;
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

  return { open, close, mapProcesses }; // This is what Process provides to its childrens
};

export default useProcessContextState;
