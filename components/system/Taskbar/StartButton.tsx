import React from "react";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton = (): JSX.Element => {
  const handleButtonClick = (): void => {
    console.log("bam cailon?");
  };

  return (
    <StyledStartButton title="Start" onClick={handleButtonClick}>
      X
    </StyledStartButton>
  );
};

export default StartButton;
