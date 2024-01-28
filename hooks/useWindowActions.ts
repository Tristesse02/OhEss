import { useCallback } from 'react';
import { useProcesses } from 'contexts/process';

interface WindowActions {
  onMinimize: React.MouseEventHandler;
  onMaximize: React.MouseEventHandler;
  onClose: React.MouseEventHandler;
}

const useWindowActions = (id: string): WindowActions => {
  const { minimized, maximized, close } = useProcesses();

  const onMinimize = useCallback(() => {
    minimized(id);
  }, [minimized, id]);

  const onMaximize = useCallback(() => {
    maximized(id);
  }, [maximized, id]);

  const onClose = useCallback(() => {
    close(id);
  }, [close, id]);

  return { onMinimize, onMaximize, onClose };
};

export default useWindowActions;
