"use client";
import React from "react";
import Desktop from "components/system/Desktop";
import { ProcessProvider } from "contexts/process";
import ProcessLoader from "components/system/Processes/ProcessLoader";
import Taskbar from "components/system/Taskbar";
import FileManager from "components/system/Files/FileManager";
// import { FileSystemProvider } from "contexts/fileSystem";

const Home = (): React.JSX.Element => {
  return (
    <React.StrictMode>
      <Desktop>
        <ProcessProvider>
          <FileManager directory="/desktop" />
          <Taskbar />
          <ProcessLoader />
        </ProcessProvider>
      </Desktop>
    </React.StrictMode>
  );
};

export default Home;
