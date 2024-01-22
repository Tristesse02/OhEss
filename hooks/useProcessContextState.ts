import { useMemo, useState } from 'react';
import type { ProcessContextState, Processes } from 'types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({});

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
