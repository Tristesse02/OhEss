import React from "react";
import StyledTaskbar from "styles/components/system/Taskbar/StyledTaskbar";
import StartButton from "./StartButton";
import TaskbarEntries from "./TaskbarEntries";
import Clock from "./Clock";

const Taskbar = (): JSX.Element => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
