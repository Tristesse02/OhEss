"use client";
import React from "react";
import Metadata from "components/layout/Metadata";
import { SessionProvider } from "contexts/session";
import StyledApp from "components/layout/StyledApp";
import { FileSystemProvider } from "contexts/fileSystem";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// TODO: Move html tag somewhere else

const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <html lang="en">
    <FileSystemProvider>
      <SessionProvider>
        <StyledApp>
          <Metadata />
          <body>{children}</body>
        </StyledApp>
      </SessionProvider>
    </FileSystemProvider>
  </html>
);

export default RootLayout;
