import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface SessionContextState {
  themeName: string;
  setThemeName: Dispatch<SetStateAction<string>>;
}

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');

  return { themeName, setThemeName };
};

export default useSessionContextState;
