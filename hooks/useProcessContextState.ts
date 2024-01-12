import { getStartupProcesses } from '@/utils/processDirectory';
import { useMemo, useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState(getStartupProcesses());

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
