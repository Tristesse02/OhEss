import { useState } from 'react';
import type { Position } from 'react-rnd';
import type { Size } from './useResizable';
import type { Dispatch, SetStateAction } from 'react';

interface WindowState {
  position?: Position;
  size?: Size;
}

type WindowStates = Record<string, WindowState>;

export interface SessionContextState {
  setThemeName: Dispatch<SetStateAction<string>>;
  setWindowStates: Dispatch<SetStateAction<WindowStates>>;
  themeName: string;
  windowStates: WindowStates;
}

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  return { setThemeName, setWindowStates, themeName, windowStates };
};

export default useSessionContextState;
