import React from "react";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/promise-function-async
const Window = dynamic(() => import("components/system/Window"));
// ssr: false

export interface ProcessComponentProps {
  id: string;
}

interface RenderProcessProps {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  id: string;
}

/**
 * A function that renders system components (etc Taskbar)
 * others render by wrapping in a window.
 * @param param0 .
 * @returns .
 */
const RenderProcess = ({
  Component,
  hasWindow = false,
  id
}: RenderProcessProps): JSX.Element => {
  const shouldRenderInWindow = hasWindow ?? false;

  return shouldRenderInWindow ? (
    <Window id={id}>
      <Component id={id} />
    </Window>
  ) : (
    <Component id={id} />
  );
};
// [EN]: we used to invoke by <processDirectory.HelloWorld.Component />

export default RenderProcess;
