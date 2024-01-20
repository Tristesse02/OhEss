/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Process } from 'types/contexts/process';

export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld'), {
    ssr: false
  }),
  hasWindow: true
};
export const Taskbar: Process = {
  Component: dynamic(() => import('components/system/Taskbar'), { ssr: false })
};
