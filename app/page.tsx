"use client";
import ProcessLoader from "components/system/ProcessLoader";
import { ProcessProvider } from "contexts/process";
import React from "react";

const Home = (): React.JSX.Element => {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
};

export default Home;
