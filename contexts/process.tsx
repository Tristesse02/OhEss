import { FC, createContext } from "react";
import useProcessContextState from "hooks/useProcessContextState";
import { initialProcessContextState } from "utils/initialContextStates";
import type {
  ProcessContextState,
  ProcessProviderProps
} from "types/contexts/process";

export const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <ProcessContext.Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
