"use client";
import React from "react";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/ProcessLoader";
import { getStartupProcesses } from "utils/processDirectory";
import Desktop from "components/system/Desktop";

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
