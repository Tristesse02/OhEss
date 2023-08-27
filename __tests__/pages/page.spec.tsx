import React from "react";
import Home from "app/page";
import defaultTheme from "styles/theme.json";
import { ThemeProvider } from "styled-components";
import { render, screen } from "@testing-library/react";

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    render(
      <ThemeProvider theme={defaultTheme.default}>
        <Home />
      </ThemeProvider>
    );
    const elem = screen.getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});
