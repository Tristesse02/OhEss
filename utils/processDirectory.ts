import dynamic from 'next/dynamic';
import { Processes } from 'types/contexts/process';

const STARTUP_PROCESSES: string[] = ['HelloWorld'];

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  FriendlyReminder: {
    Component: dynamic(() => import('components/apps/FriendlyReminder')),
    hasWindow: false
  },
  Question: {
    Component: dynamic(() => import('components/apps/Question')),
    hasWindow: true
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (acc, id) => ({
      ...acc,
      [id]: processDirectory[id] // [id] because if just id, it will be understand as a string literal
    }),
    {}
  );

// export default processDirectory;
