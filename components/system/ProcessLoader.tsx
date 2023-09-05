import { ProcessConsumer } from "contexts/process";
import { FC } from "react";

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} /> // [EN]: we used to invoke by <processDirectory.HelloWorld.Component />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
