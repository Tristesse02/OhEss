import React from "react";
import dynamic from "next/dynamic";
import type { Process } from "types/contexts/process";

// eslint-disable-next-line @typescript-eslint/promise-function-async
const Window = dynamic(() => import("components/system/Window"), {
  ssr: false
});

/**
 * A function that renders system components (etc Taskbar)
 * others render by wrapping in a window.
 * @param param0 .
 * @returns .
 */
const RenderProcess = ({ Component, hasWindow }: Process): JSX.Element => {
  const shouldRenderInWindow = hasWindow ?? false;

  return shouldRenderInWindow ? (
    <Window>
      <Component />
    </Window>
  ) : (
    <Component />
  );
};
// [EN]: we used to invoke by <processDirectory.HelloWorld.Component />

export default RenderProcess;
