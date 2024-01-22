import type { ComponentType } from 'react';

export interface Process {
  Component: ComponentType; // [EN]: used to be "ComponentType"
  hasWindow?: boolean;
  title: string;
  icon: string;
}

export type Processes = Record<string, Process>;

export interface ProcessContextState {
  open: (id: string) => void;
  close: (id: string) => void;
  // contextValue: { processes: Processes };
  processes: Processes;
}

export interface ProcessProviderProps {
  children: React.ReactNode;
}
