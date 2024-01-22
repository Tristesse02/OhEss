/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

const ProcessDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld'), {
      ssr: false
    }),
    hasWindow: true
  }
};

export default ProcessDirectory;
