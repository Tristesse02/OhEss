import React from "react";
import Home from "app/page";
import themes from "styles/theme";
import StyledApp from "components/layout/StyledApp";
import { render, screen } from "@testing-library/react";

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    render(
      <StyledApp currentTheme={themes.default}>
        <Home />
      </StyledApp>
    );
    const elem = screen.getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});
