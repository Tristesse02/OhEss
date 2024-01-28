import { useTheme } from 'styled-components';
import React, { useCallback, useState } from 'react';
import type { Position, RndResizeCallback } from 'react-rnd';
import type { DraggableEventHandler } from 'react-draggable';

interface Size {
  height: string;
  width: string;
}

interface Resizable extends Size {
  updateSize: RndResizeCallback;
}

interface Draggable extends Position {
  updatePosition: DraggableEventHandler;
}

type DraggableAndResizable = Resizable & Draggable;

const defaultWindowSize = { height: '200px', width: '250px' };

const defaultWindowPosition = { x: 0, y: 0 };

const useDraggableAndResizable = (maximized = false): DraggableAndResizable => {
  const { sizes } = useTheme();
  const [{ height, width }, setSize] = useState<Size>(defaultWindowSize);
  const [{ x, y }, setPosition] = React.useState<Position>(
    defaultWindowPosition
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

  return {
    updateSize,
    updatePosition,
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    width: maximized ? '100%' : width,
    height: maximized ? `calc(100% - ${sizes.taskbar.height})` : height // TODO: Subtract taskbar height
  };
};

export default useDraggableAndResizable;
