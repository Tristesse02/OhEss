import React from "react";
import type { FC } from "react";
import { ProcessConsumer } from "contexts/process";
import { Process } from "types/contexts/process";
import dynamic from "next/dynamic";

// TODO: Add Lintingn rule to catch key required
// Doesn't work behind condition

const Window = dynamic(() => import("components/system/Window"));
const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  ); // [EN]: we used to invoke by <processDirectory.HelloWorld.Component />

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, process]) => (
        <RenderProcess key={id} {...process} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;
