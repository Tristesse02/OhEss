export type Process = {
  Component: any; // [EN]: used to be "ComponentType"
};

export type Processes = {
  [id: string]: Process;
};
