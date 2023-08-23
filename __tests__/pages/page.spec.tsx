import React from "react";
import Home from "app/page";
import defaultTheme from "themes/default.json";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    );
    const elem = screen.getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});
