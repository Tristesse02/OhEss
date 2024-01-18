import React from "react";
import useWallpaper from "hooks/useWallpaper";
import StyledDesktop from "styles/components/system/StyledDesktop";
import type { DesktopProps } from "types/components/pages/Desktop";

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const desktopRef = React.useRef<HTMLDivElement | null>(null);

  useWallpaper(desktopRef);

  return (
    <StyledDesktop ref={desktopRef} as="main">
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
