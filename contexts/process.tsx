import { createContext } from "react";
import useProcessContextState from "hooks/useProcessContextState";
import { initialProcessContextState } from "utils/initialContextStates";
import type {
  ProcessContextState,
  ProcessProviderProps
} from "types/contexts/process";

export const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProcessContextState
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProcessProvider: React.FC<ProcessProviderProps> = ({
  children
}) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Provider value={useProcessContextState()}>{children}</Provider>
);

export const ProcessConsumer = Consumer;
