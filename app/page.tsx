"use client";
import React from "react";
import Desktop from "components/system/Desktop";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/ProcessLoader";

const Home = (): React.JSX.Element => {
  return (
    <Desktop>
      <ProcessProvider>
        <ProcessLoader />
      </ProcessProvider>
    </Desktop>
  );
};

export default Home;
