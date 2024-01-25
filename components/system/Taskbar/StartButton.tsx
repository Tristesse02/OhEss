import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton = (): JSX.Element => {
  // const handleButtonClick = (open: any) => () => {
  //   open("HelloWorld");
  // };

  // const handleButtonDoubleClick = (close: any) => () => {
  //   close("HelloWorld");
  // };

  return (
    <StyledStartButton>
      <FontAwesomeIcon icon={faWindows} aria-hidden="true" />
    </StyledStartButton>
  );
};

export default StartButton;
