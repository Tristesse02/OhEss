import React from "react";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";
import WindowIcon from "../icons";

const StartButton = (): JSX.Element => {
  // const handleButtonClick = (open: any) => () => {
  //   open("HelloWorld");
  // };

  // const handleButtonDoubleClick = (close: any) => () => {
  //   close("HelloWorld");
  // };

  return (
    <StyledStartButton>
      <WindowIcon />
    </StyledStartButton>
  );
};

export default StartButton;
