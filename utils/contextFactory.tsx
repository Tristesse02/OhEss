import { createContext } from "react";
import type {
  ContextFactory,
  ContextProviderProps
} from "types/contexts/contextFactory";

export const contextFactory: ContextFactory = <T,>(
  initialContextState: T,
  useContextState: () => T
) => {
  const Context = createContext<T>(initialContextState);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Consumer: Context.Consumer,
    Provider: ContextProvider,
    useContext: () => useContextState(Context)
  };
};
