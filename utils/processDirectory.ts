/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcess';

export interface Process {
  autoSizing?: boolean;
  backgroundColor?: string;
  Component: ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  icon: string;
  url?: string;
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
  },
  V86: {
    autoSizing: true,
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/v86.ico',
    title: 'v86'
  }
};

export default processDirectory;
