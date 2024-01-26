import React from "react";
import useWallpaper from "hooks/useWallpaper";
import StyledDesktop from "styles/components/system/StyledDesktop";

const Desktop = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const desktopRef = React.useRef<HTMLDivElement | null>(null);

  useWallpaper(desktopRef);

  return <StyledDesktop ref={desktopRef}>{children}</StyledDesktop>;
};

export default Desktop;
