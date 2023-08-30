import processDirectory from "utils/processDirectory";
import { FC, createContext } from "react";

// const ProcessContext = createContext({});

const ProcessLoader: FC = () => (
  <>
    {Object.entries(processDirectory).map(([id, { Component }]) => (
      <Component key={id} /> // [EN]: we used to invoke by <processDirectory.HelloWorld.Component />
    ))}
  </>
);

export default ProcessLoader;
