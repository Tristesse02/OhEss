import { ComponentType } from 'react';

type Process = {
  Component: ComponentType; // [EN]: used to be "ComponentType"
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};
