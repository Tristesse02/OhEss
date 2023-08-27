"use client";
import React from "react";
import type { Metadata } from "next";
import StyledApp from "@/components/layout/StyledApp";
import data from "@/components/layout/Metadata.json";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = data

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <StyledApp>
        <body>{children}</body>
      </StyledApp>
    </html>
  );
}
