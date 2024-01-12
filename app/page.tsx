"use client";
import React from "react";
import Desktop from "components/system/Desktop";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/ProcessLoader";
import { getStartupProcesses } from "utils/processDirectory";

const Home = (): React.JSX.Element => {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
};

export default Home;
