import { createContext } from "react";
import useSessionContextState from "hooks/useSessionContextState";
import { initialSessionContextState } from "utils/initialContextStates";

export const SessionContext = createContext<any>(initialSessionContextState);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SessionProvider = ({ children }: any) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
