import React from "react";
import { Rnd } from "react-rnd";
import Titlebar from "./Titlebar";
import rndDefaults from "utils/rndDefaults";
import useResizable from "hooks/useResizable";
import useDraggable from "utils/useDraggable";
import { useProcesses } from "contexts/process";
import StyledWindow from "styles/components/system/Window/StyledWindow";
import type { ProcessComponentProps } from "../Processes/RenderProcess";

const Window: React.FC<
  ProcessComponentProps & { children: React.ReactNode }
> = ({ id, children }): JSX.Element => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const { x, y, updatePosition } = useDraggable(maximized);
  const { height, width, updateSize } = useResizable(maximized);
  return (
    <Rnd
      enableResizing={!(maximized ?? false)}
      size={{ height, width }}
      onResize={updateSize}
      onDragStop={updatePosition}
      position={{ x, y }}
      {...rndDefaults}
    >
      <StyledWindow $minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
