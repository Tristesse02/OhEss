import type { Dispatch, SetStateAction } from 'react';

export interface SessionContextState {
  themeName: string;
  setThemeName: Dispatch<SetStateAction<string>>;
}

export interface SessionProviderProps {
  children: React.ReactNode;
}
