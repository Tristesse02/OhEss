import { createContext } from "react";
import useSessionContextState from "hooks/useSessionContextState";
import { initialSessionContextState } from "utils/initialContextStates";

export const { Consumer, Provider } = createContext<any>(
  initialSessionContextState
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SessionProvider = ({ children }: any) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Provider value={useSessionContextState()}>{children}</Provider>
);

export const SessionConsumer = Consumer;
