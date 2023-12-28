import { useMemo, useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
