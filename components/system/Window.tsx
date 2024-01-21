import React from "react";
import StyledWindow from "styles/components/system/StyledWindow";

interface StyledWindowProps {
  children: React.ReactNode;
}

const Window = ({ children }: StyledWindowProps): React.JSX.Element => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;
