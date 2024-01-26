import React from "react";
import { useProcesses } from "contexts/process";
import StyledWindow from "styles/components/system/StyledWindow";
import type { ProcessComponentProps } from "./Processes/RenderProcess";

const Window: React.FC<
  ProcessComponentProps & { children: React.ReactNode }
> = ({ id, children }): JSX.Element => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();
  return <StyledWindow minimized={minimized}>{children}</StyledWindow>;
};

export default Window;
