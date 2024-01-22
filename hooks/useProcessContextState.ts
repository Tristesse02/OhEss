import { useMemo, useState } from 'react';
import { HelloWorld } from 'utils/processDirectory';
import type { ProcessContextState, Processes } from 'types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ HelloWorld });

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
