import React from "react";
import TaskbarEntry from "./TaskbarEntry";
import StyledTaskbarEntries from "styles/components/system/Taskbar/StyledTaskbarEntries";

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
