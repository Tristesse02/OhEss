import StyledDesktop from "styles/components/system/StyledDesktop";
import { FC } from "react";
import { DesktopProps } from "types/components/pages/Desktop";

const Desktop: FC<DesktopProps> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
