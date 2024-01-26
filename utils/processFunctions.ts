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

export const toggleProcessSetting =
  (processId: string, setting: 'minimized' | 'maximized') =>
  ({ [processId]: process, ...otherProcesses }: Processes): Processes =>
    process !== undefined
      ? {
          [processId]: {
            ...process,
            [setting]: !(process[setting] ?? false)
          },
          ...otherProcesses
        }
      : otherProcesses;

export const maximizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(processes);

export const minimizeProcess =
  (processId: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(processes);
