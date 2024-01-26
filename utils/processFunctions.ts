import processDirectory from './processDirectory';
import type { Processes } from './processDirectory';

export const closeProcess =
  (processId: string) =>
  ({ [processId]: _closedProcess, ...remainingProcesses }: Processes) =>
    remainingProcesses;

export const openProcess =
  (processId: string) => (currentProcesses: Processes) =>
    processId in currentProcesses
      ? currentProcesses
      : { ...currentProcesses, [processId]: processDirectory[processId] };
