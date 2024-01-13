export interface ContextProviderProps {
  children: React.ReactNode;
}

export type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC<ContextProviderProps>;
};
