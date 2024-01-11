import React from "react";
import type { FC } from "react";
import StyledDesktop from "styles/components/system/StyledDesktop";
import type { DesktopProps } from "types/components/pages/Desktop";

const Desktop: FC<DesktopProps> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
