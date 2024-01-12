import React from "react";
import StyledDesktop from "styles/components/system/StyledDesktop";
import type { DesktopProps } from "types/components/pages/Desktop";

const Desktop: React.FC<DesktopProps> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
