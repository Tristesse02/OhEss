import React from "react";
import { Rnd } from "react-rnd";
import useRnd from "hooks/useRnd";
import Titlebar from "./Titlebar";
import { useProcesses } from "contexts/process";
import StyledWindow from "styles/components/system/Window/StyledWindow";
import type { ProcessComponentProps } from "../Processes/RenderProcess";

interface WindowProps extends ProcessComponentProps {
  children: React.ReactNode;
}

const Window = ({ id, children }: WindowProps): JSX.Element => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();

  const rndProps = useRnd(maximized);
  return (
    <Rnd {...rndProps}>
      <StyledWindow $minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;
