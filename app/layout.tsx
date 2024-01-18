"use client";
import React from "react";
import Metadata from "components/layout/Metadata";
import { SessionProvider } from "contexts/session";
import StyledApp from "components/layout/StyledApp";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <body>{children}</body>
      </StyledApp>
    </SessionProvider>
  </html>
);

export default RootLayout;
