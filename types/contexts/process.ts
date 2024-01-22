import type { ComponentType } from 'react';

export interface Process {
  Component: ComponentType; // [EN]: used to be "ComponentType"
  hasWindow?: boolean;
  title: string;
  icon: string;
}

export type Processes = Record<string, Process>;

export type ProcessMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];
export interface ProcessContextState {
  open: (id: string) => void;
  close: (id: string) => void;
  // contextValue: { processes: Processes };
  mapProcesses: ProcessMap;
}

export interface ProcessProviderProps {
  children: React.ReactNode;
}
