/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

export interface Process {
  Component: ComponentType; // [EN]: used to be "ComponentType"
  hasWindow?: boolean;
  title: string;
  icon: string;
}

export type Processes = Record<string, Process>;

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
  },
  GeomyDash: {
    Component: dynamic(() => import('components/apps/GeomyDash')),
    hasWindow: true,
    icon: '/geomydash.ico',
    title: 'Geomy Dash'
  }
};

export default processDirectory;
