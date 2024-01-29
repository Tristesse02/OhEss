import { createContext, useContext } from "react";

interface ContextProviderProps {
  children: React.ReactNode;
}

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: (props: ContextProviderProps) => JSX.Element;
  useContext: () => T;
};

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
    useContext: () => useContext(Context)
  };
};
