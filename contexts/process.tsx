import processDirectory from "utils/processDirectory";
import { createContext, useMemo, useState } from "react";
import { Process } from "@/types/utils/processDirectory";

type ProcessContextState = {
  processes: Partial<Process>;
};
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
