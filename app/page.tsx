"use client";
import WindowManager from "components/system/WindowManager";
import { ProcessProvider } from "contexts/process";
import React from "react";

const Home = (): React.JSX.Element => {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
};

export default Home;
