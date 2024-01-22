import React from "react";
import RenderProcess from "./RenderProcess";
import { ProcessConsumer } from "contexts/process";

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, process]) => <RenderProcess key={id} {...process} />)
    }
  </ProcessConsumer>
);

export default ProcessLoader;
