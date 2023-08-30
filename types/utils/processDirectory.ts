import { ComponentType } from 'react';

type Process = {
  Component: ComponentType;
};

export type Processes = {
  [id: string]: Process;
};
