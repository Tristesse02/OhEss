import React from "react";
import StyledTaskbarEntry from "styles/components/system/Taskbar/StyledTaskbarEntry";

interface TaskbarEntryProps {
  icon: string;
  title: string;
}

/**
 * A JSX component that renders a taskbar entry.
 */
const TaskbarEntry = ({
  icon = "/Lau.ico",
  title = "Hello World"
}: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
