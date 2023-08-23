"use client";
import React from "react";

import type { Metadata } from "next";

import { ThemeProvider, createGlobalStyle } from "styled-components";

import defaultTheme from "themes/default.json";

// [EN]: if we want to use next/font/google, we have to delete .babelrc (part of the configuration)
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box
  }
`;

export const metadata: Metadata = {
  title: "OhEss",
  description: "Creating an OS using webpage"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
