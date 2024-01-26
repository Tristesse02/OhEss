import React from "react";
export const MinimizeIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 10 1">
    <path d="M0 0h10v1H0z"></path>
  </svg>
);

export const MaximizeIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 10 10">
    <path d="M0 0v10h10V0H0zm1 1h8v8H1V1z"></path>
  </svg>
);

export const CloseIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 10 10">
    <path d="M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"></path>
  </svg>
);

const WindowIcon = (): React.JSX.Element => (
  <svg viewBox="0 0 448 512">
    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
  </svg>
);

export default WindowIcon;
