import Button from "styles/common/Button";
import React, { useCallback } from "react";
import { useProcesses } from "contexts/process";
import { CloseIcon, MaximizeIcon, MinimizeIcon } from "../icons";
import StyledTitlebar from "styles/components/system/Window/StyledTitlebar";

interface TitlebarProps {
  id: string;
}

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    minimized,
    maximized,
    close,
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();

  const onMinimize = useCallback(() => {
    minimized(id);
  }, [minimized, id]);

  const onMaximize = useCallback(() => {
    maximized(id);
  }, [maximized, id]);

  const onClose = useCallback(() => {
    close(id);
  }, [close, id]);

  return (
    <StyledTitlebar>
      <h1>
        <figure>
          <img src={icon} alt={title}></img>
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav>
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
