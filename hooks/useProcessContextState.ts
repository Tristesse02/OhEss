import { ProcessContextState, Processes } from 'types/contexts/process';
import { useMemo, useState } from 'react';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
