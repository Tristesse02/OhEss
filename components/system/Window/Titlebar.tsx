import React from "react";
import Image from "styles/common/Image";
import Button from "styles/common/Button";
import { useProcesses } from "contexts/process";
import useWindowActions from "hooks/useWindowActions";
import { CloseIcon, MaximizeIcon, MinimizeIcon } from "../icons";
import StyledTitlebar from "styles/components/system/Window/StyledTitlebar";

interface TitlebarProps {
  id: string;
}

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
  const {
    processes: {
      [id]: { icon, title }
    }
  } = useProcesses();

  const { onClose, onMaximize, onMinimize } = useWindowActions(id);

  return (
    <StyledTitlebar className="handle">
      <h1>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button className="maximize" onClick={onMaximize}>
          <MaximizeIcon />
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitlebar>
  );
};

export default Titlebar;
