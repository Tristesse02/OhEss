import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";
import { ProcessConsumer } from "contexts/process";

const StartButton = (): JSX.Element => {
  // const handleButtonClick = (open: any) => () => {
  //   open("HelloWorld");
  // };

  // const handleButtonDoubleClick = (close: any) => () => {
  //   close("HelloWorld");
  // };

  return (
    <ProcessConsumer>
      {({ close, open }) => {
        return (
          <StyledStartButton>
            <FontAwesomeIcon icon={faWindows} aria-hidden="true" />
          </StyledStartButton>
        );
      }}
    </ProcessConsumer>
  );
};

export default StartButton;
