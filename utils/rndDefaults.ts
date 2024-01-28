import type { HandleStyles } from 'react-rnd';

interface RndDefaultProps {
  bounds: string;
  cancel: string;
  dragHandleClassName: string;
  enableUserSelectHack: boolean;
  resizeHandleStyles: HandleStyles;
  style: React.CSSProperties;
}

const rndDefaults: RndDefaultProps = {
  bounds: 'main',
  cancel: '.cancel',
  dragHandleClassName: 'handle',
  enableUserSelectHack: false,
  resizeHandleStyles: {
    left: {
      cursor: 'ew-resize',
      left: '-3px',
      width: '6px'
    },
    right: {
      cursor: 'ew-resize',
      right: '-3px',
      width: '6px'
    },
    top: {
      cursor: 'ns-resize',
      height: '6px',
      top: '-3px'
    },
    bottom: {
      bottom: '-3px',
      cursor: 'ns-resize',
      height: '6px'
    },
    bottomLeft: {
      bottom: '-3px',
      left: '-3px',
      width: '12px',
      height: '12px',
      cursor: 'sw-resize'
    },
    bottomRight: {
      bottom: '-3px',
      right: '-3px',
      width: '12px',
      height: '12px',
      cursor: 'se-resize'
    },
    topLeft: {
      top: '-3px',
      left: '-3px',
      width: '12px',
      height: '12px',
      cursor: 'nwse-resize'
    },
    topRight: {
      top: '-3px',
      right: '-3px',
      width: '12px',
      height: '12px',
      cursor: 'nesw-resize'
    }
  },
  style: {
    zIndex: 1
  }
};

export default rndDefaults;
