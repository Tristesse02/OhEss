import React from "react";
import type { FC } from "react";
import { ProcessConsumer } from "contexts/process";
import type { Process } from "types/contexts/process";
import dynamic from "next/dynamic";

// TODO: Add Lintingn rule to catch key required
// Doesn't work behind condition

// eslint-disable-next-line @typescript-eslint/promise-function-async
const Window = dynamic(() => import("components/system/Window"));

/**
 * A function that renders system components (etc Taskbar)
 * others render by wrapping in a window.
 * @param param0 .
 * @returns .
 */
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
