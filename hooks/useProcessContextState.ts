import { closeProcess, openProcess } from 'utils/processFunctions';
import { useCallback, useState } from 'react';
import type {
  ProcessContextState,
  ProcessMap,
  Processes
} from 'types/contexts/process';

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
