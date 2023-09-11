import { createContext } from "react";
import useSessionContextState from "hooks/useSessionContextState";

export const SessionContext = createContext<any>({
  theme: undefined
});

export const SessionProvider = ({ children }: any) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
