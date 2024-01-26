import React, { useCallback } from "react";
import { useProcesses } from "contexts/process";
import StyledTaskbarEntry from "styles/components/system/Taskbar/StyledTaskbarEntry";
import Button from "styles/common/Button";

interface TaskbarEntryProps {
  id: string;
  icon: string;
  title: string;
}

/**
 * A JSX component that renders a taskbar entry.
 */
const TaskbarEntry = ({ icon, id, title }: TaskbarEntryProps): JSX.Element => {
  const { minimized } = useProcesses();
  const onClick = useCallback(() => {
    minimized(id);
  }, [id, minimized]);

  return (
    <StyledTaskbarEntry>
      <Button onClick={onClick}>
        <figure>
          <img src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
