import type { ComponentType } from 'react';

export interface Process {
  Component: ComponentType; // [EN]: used to be "ComponentType"
  hasWindow?: boolean;
  title: string;
  icon: string;
}

export type Processes = Record<string, Process>;

export interface ProcessContextState {
  processes: Processes;
}

export interface ProcessProviderProps {
  children: React.ReactNode;
}
