import React from "react";
import StyledWindow from "styles/components/system/StyledWindow";

const Window = ({ children }: any): React.JSX.Element => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
