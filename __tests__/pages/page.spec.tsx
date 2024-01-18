import React from "react";
import Home from "app/page";
import StyledApp from "components/layout/StyledApp";
import { render, screen } from "@testing-library/react";

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("Test 1:", () => {
  test("renders index page, checking for main role", () => {
    render(
      <StyledApp>
        <Home />
      </StyledApp>
    );
    const elem = screen.getByRole("main");

    expect(elem).toBeInTheDocument();
  });
});
