import { ComponentType } from 'react';

export type Process = {
  Component: ComponentType; // [EN]: used to be "ComponentType"
  hasWindow: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
