import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons"; // Assuming you want to use a Windows icon
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton = (): JSX.Element => {
  const handleButtonClick = (): void => {
    console.log("Button clicked");
  };

  return (
    <StyledStartButton title="Start" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faWindows} aria-hidden="true" />
    </StyledStartButton>
  );
};

export default StartButton;
