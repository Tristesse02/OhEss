import processDirectory from "utils/processDirectory";
import { createContext } from "react";
import type { ProcessContextState } from "types/contexts/process";
import useProcessContextState from "hooks/useProcessContextState";
import { initialProcessContextState } from "utils/initialContextStates";

export const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProcessProvider = ({ children }: any) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
