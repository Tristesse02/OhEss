import React from "react";
import TaskbarEntry from "./TaskbarEntry";
import StyledTaskbarEntries from "styles/components/system/StyledTaskbarEntries";

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
