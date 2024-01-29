import React from "react";
export const MinimizeIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 10 1">
    <path d="M0 0h10v1H0z" />
  </svg>
);

export const MaximizeIcon = (): React.JSX.Element => (
  <svg viewBox="0 3 32 28">
    <path
      d="M28,8H14a2,2,0,0,0-2,2v2h2V10H28V20H26v2h2a2,2,0,0,0,2-2V10A2,2,0,0,0,28,8Z"
      className="clr-i-outline clr-i-outline-path-1"
    ></path>
    <path
      d="M22,14H8a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V16A2,2,0,0,0,22,14ZM8,26V16H22V26Z"
      className="clr-i-outline clr-i-outline-path-2"
    ></path>
  </svg>
);

export const CloseIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 10 10">
    <path d="M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z" />
  </svg>
);

const WindowIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 448 512">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
  </svg>
);

export default WindowIcon;
