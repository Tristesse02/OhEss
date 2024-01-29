import { useCallback } from 'react';
import useResizable from './useResizable';
import useDraggable from './useDraggable';
import rndDefaults from 'utils/rndDefaults';
import type { Props, RndResizeCallback } from 'react-rnd';
import type { DraggableEventHandler } from 'react-draggable';

const useRnd = (maximized = false): Props => {
  const [size, setSize] = useResizable(maximized);
  const [position, setPosition] = useDraggable(maximized);
  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) => {
      setPosition({ x: positionX, y: positionY });
    },
    [setPosition]
  );
  const onResizeStop = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    [setPosition, setSize]
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized,
    onDragStop,
    onResizeStop,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
