import { useTheme } from 'styled-components';
import type { Position, Props, RndResizeCallback } from 'react-rnd';
import type { DraggableEventHandler } from 'react-draggable';
import React, { useCallback, useMemo, useState } from 'react';
import { DEFAULT_WINDOW_POSITION, DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

interface Resizable extends Size {
  updateSize: RndResizeCallback;
}

interface Draggable extends Position {
  updatePosition: DraggableEventHandler;
}

type DraggableAndResizable = Resizable & Draggable;

const useDraggableAndResizable = (maximized = false): DraggableAndResizable => {
  const { sizes } = useTheme();
  const [{ height, width }, setSize] = useState<Size>(DEFAULT_WINDOW_SIZE);
  const [{ x, y }, setPosition] = React.useState<Position>(
    DEFAULT_WINDOW_POSITION
  );
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) => {
      setPosition({ x: positionX, y: positionY });
    },
    []
  );
  const updateSize = useCallback<RndResizeCallback>(
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
    []
  );

  const taskbarHeight = useMemo(
    () => Number(sizes.taskbar.height.replace('px', '')),
    [sizes.taskbar.height]
  );

  return {
    updateSize,
    updatePosition,
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    width: maximized ? '100%' : width,
    height: maximized ? `${window.innerHeight - taskbarHeight}px` : height // TODO: Subtract taskbar height
  };
};

export default useDraggableAndResizable;
