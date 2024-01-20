import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton = (): JSX.Element => {
  const handleButtonClick = (): void => {
    console.log("bam cailon?");
  };

  return (
    <StyledStartButton title="Start" onClick={handleButtonClick}>
      <FontAwesomeIcon icon={faMoon} />
    </StyledStartButton>
  );
};

export default StartButton;
