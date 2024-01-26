import React from "react";
import Titlebar from "./Titlebar";
import { useProcesses } from "contexts/process";
import StyledWindow from "styles/components/system/Window/StyledWindow";
import type { ProcessComponentProps } from "../Processes/RenderProcess";

const Window: React.FC<
  ProcessComponentProps & { children: React.ReactNode }
> = ({ id, children }): JSX.Element => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();
  return (
    <StyledWindow $minimized={minimized}>
      <Titlebar id={id} />
      {children}
    </StyledWindow>
  );
};

export default Window;
