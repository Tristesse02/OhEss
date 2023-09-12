import { ProcessConsumer } from "contexts/process";
import { FC } from "react";
import Window from 'components/system/Window'

// TODO: Add Lintingn rule to catch key required

const ProcessLoader: FC = () => (
  <ProcessConsumer>
    {({ processes }) =>
      Object.entries(processes).map(([id, { Component, hasWindow }]) => (
        hasWindow 
        ? <Window key={id}><Component /></Window>
        : <Component key={id} /> // [EN]: we used to invoke by <processDirectory.HelloWorld.Component />
        
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;