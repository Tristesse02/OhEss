"use client";
import React from "react";
import Metadata from "components/layout/Metadata";
import { SessionProvider } from "contexts/session";
import StyledApp from "components/layout/StyledApp";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <Metadata />
      <SessionProvider>
        <StyledApp>
          <body>{children}</body>
        </StyledApp>
      </SessionProvider>
    </html>
  );
}
