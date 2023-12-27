"use client";
import React from "react";
import type { Metadata } from "next";
import themes from "styles/theme.json";
import data from "components/layout/Metadata.json";
import { SessionProvider } from "contexts/session";
import StyledApp from "components/layout/StyledApp";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = data;

export default function RootLayout({
  children
}: {
  readonly children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <SessionProvider>
        <StyledApp currentTheme={themes.default}>
          <body>{children}</body>
        </StyledApp>
      </SessionProvider>
    </html>
  );
}
