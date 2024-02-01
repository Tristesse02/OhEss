import { useEffect, useState } from 'react';
import type { Props } from 'react-rnd';
import { useTheme } from 'styled-components';
import { pxToNumber } from 'utils/stringFunctions';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, React.Dispatch<React.SetStateAction<Size>>];

const useResizable = (
  maximized = false,
  autoSizing = false,
  size = DEFAULT_WINDOW_SIZE
): Resizable => {
  const [{ height, width }, setSize] = useState<Size>(size);
  const {
    sizes: { taskbar }
  } = useTheme();

  useEffect(() => {
    if (autoSizing) {
      setSize(size);
    }
  }, [autoSizing, size]);

  return [
    {
      width: maximized ? '100%' : width,
      height: maximized
        ? `${window.innerHeight - pxToNumber(taskbar.height)}px`
        : height
    },
    setSize
  ];
};

export default useResizable;
