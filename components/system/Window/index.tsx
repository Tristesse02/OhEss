import React from "react";
import Titlebar from "./Titlebar";
import RndWindow from "./RndWindow";
import { useProcesses } from "contexts/process";
import StyledWindow from "styles/components/system/Window/StyledWindow";
import type { ProcessComponentProps } from "../Processes/RenderProcess";

interface WindowProps extends ProcessComponentProps {
  children: React.ReactNode;
}

const Window = ({ id, children }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { backgroundColor, minimized }
    }
  } = useProcesses();

  return (
    <RndWindow id={id}>
      <StyledWindow $minimized={minimized} style={{ backgroundColor }}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
