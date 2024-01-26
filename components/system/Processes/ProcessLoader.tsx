import React from "react";
import RenderProcess from "./RenderProcess";
import { ProcessConsumer } from "contexts/process";

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess key={id} Component={Component} hasWindow={hasWindow} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
