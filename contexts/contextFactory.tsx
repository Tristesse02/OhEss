import { createContext } from "react";
import type {
  ContextFactory,
  ContextProviderProps
} from "types/contexts/contextFactory";

export const contextFactory: ContextFactory = <T,>(
  initialContextState: T,
  useContextState: () => T
) => {
  const { Consumer, Provider } = createContext<T>(initialContextState);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ContextProvider };
};
