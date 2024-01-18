import { useMemo, useState } from 'react';
import { HelloWorld, Taskbar } from './../utils/processDirectory';
import type { ProcessContextState } from 'types/contexts/process';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ Taskbar });

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return contextValue;
};

export default useProcessContextState;
