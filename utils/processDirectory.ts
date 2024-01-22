/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/contexts/process';

export const HelloWorld = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true,
  icon: '/Lau.ico',
  title: 'Hello World'
};

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: '/Lau.ico',
    title: 'Hello World'
  }
};

export default processDirectory;
