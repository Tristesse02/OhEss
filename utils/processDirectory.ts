import { Processes } from 'types/contexts/process';
import dynamic from 'next/dynamic';

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

export default processDirectory;
