import React from "react";
import { Rnd } from "react-rnd";
import Titlebar from "./Titlebar";
import rndDefaults from "utils/rndDefaults";
import { useProcesses } from "contexts/process";
import useDraggableAndResizable from "hooks/useDraggableAndResizable";
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

  const { x, y, updatePosition, height, width, updateSize } =
    useDraggableAndResizable(maximized);
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
