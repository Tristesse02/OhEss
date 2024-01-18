import React from "react";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton: React.FC = () => {
  const handleButtonClick = (): void => {
    console.log("bam cailon?");
  };

  return (
    <StyledStartButton type="button" onClick={handleButtonClick}>
      X
    </StyledStartButton>
  );
};

export default StartButton;