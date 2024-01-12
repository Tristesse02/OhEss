import { ProcessContextState } from 'types/contexts/process';
import { SessionContextState } from 'types/contexts/session';

export const initialProcessContextState: ProcessContextState = {
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
