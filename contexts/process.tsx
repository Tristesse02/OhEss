import processDirectory from "utils/processDirectory";
import { createContext } from "react";
import { ProcessContextState } from "types/contexts/process";
import useProcessContextState from "hooks/useProcessContextState";

export const ProcessContext = createContext<ProcessContextState>({
  processes: {}
});

export const ProcessProvider = ({ children }: any) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
