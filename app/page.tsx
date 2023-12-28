"use client";
import React from "react";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/ProcessLoader";
import { getStartupProcesses } from "utils/processDirectory";

const Home = (): React.JSX.Element => {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <ProcessLoader />
    </ProcessProvider>
  );
};

export default Home;
