import React from 'react';

type DoubleClick = (
  handler: React.MouseEventHandler,
  timeout?: number
) => React.MouseEventHandler;

const useDoubleClick: DoubleClick = (handler, timeout = 500) => {
  const timer = React.useRef<NodeJS.Timeout | null>(null);
  const onClick = React.useCallback<React.MouseEventHandler>(
    (event) => {
      if (timer.current === null) {
        timer.current = setTimeout(() => {
          timer.current = null;
        }, timeout);
      } else {
        clearTimeout(timer.current);
        handler(event);
        timer.current = null;
      }
    },
    [handler, timeout]
  );

  return onClick;
};

export default useDoubleClick;
