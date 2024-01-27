import { useCallback, useState } from 'react';
import type { RndResizeCallback } from 'react-rnd';

interface Size {
  height: string;
  width: string;
}

interface Resizable extends Size {
  updateSize: RndResizeCallback;
}

const defaultWindowSize = { height: '200px', width: '250px' };

const useResizable = (maximized = false): Resizable => {
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const updateSize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
    },
    []
  );

  return {
    height: maximized ? '100%' : height, // TODO: Subtract taskbar height
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useResizable;
