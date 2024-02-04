import React from "react";
import WindowIcon from "../icons";
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
      <WindowIcon />
    </StyledStartButton>
  );
};

export default StartButton;
