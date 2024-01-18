import React from "react";
import RenderProcess from "./RenderProcess";
import { ProcessConsumer } from "contexts/process";
import { Process } from "types/contexts/process";

const ProcessReducer = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ processes }) => Object.entries(processes).map(ProcessReducer)}
  </ProcessConsumer>
);

export default ProcessLoader;
