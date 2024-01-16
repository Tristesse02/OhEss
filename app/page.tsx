"use client";
import React from "react";
import Desktop from "components/system/Desktop";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/ProcessLoader";

const Home = (): React.JSX.Element => {
  return (
    <React.StrictMode>
      <Desktop>
        <ProcessProvider>
          <ProcessLoader />
        </ProcessProvider>
      </Desktop>
    </React.StrictMode>
  );
};

export default Home;
