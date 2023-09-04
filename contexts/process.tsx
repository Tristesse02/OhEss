import processDirectory from "utils/processDirectory";
import { createContext, useMemo, useState } from "react";
import { ProcessContextState } from "types/contexts/process";

export const ProcessContext = createContext<ProcessContextState>({
  processes: {}
});

export const ProcessProvider = ({ children }: any) => {
  const [processes] = useState(processDirectory);

  const contextValue = useMemo(() => ({ processes }), [processes]);

  return (
    <ProcessContext.Provider value={contextValue}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
