import React from "react";
import StyledTaskbar from "styles/components/system/StyledTaskbar";
import StartButton from "./StartButton";
import TaskbarEntries from "./TaskbarEntries";
import Clock from "./Clock";

const Taskbar: React.FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
