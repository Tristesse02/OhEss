import React, { useCallback } from 'react';
import type { RndDragCallback } from 'react-rnd';
import type { DraggableEventHandler } from 'react-draggable';

interface Position {
  x: number;
  y: number;
}

interface Draggable extends Position {
  updatePosition: DraggableEventHandler;
}

// TODO: default on center of screen
const defaultWindowPosition = { x: 0, y: 0 };

const useDraggable = (maximized = false): Draggable => {
  const [{ x, y }, setPosition] = React.useState<Position>(
    defaultWindowPosition
  );
  const updatePosition = useCallback<RndDragCallback>(
    (_event, { x: elementX, y: elementY }) => {
      setPosition({ x: elementX, y: elementY });
    },
    []
  );

  return {
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition
  };
};

export default useDraggable;
