import React from "react";
import Home from "app/page";
import StyledApp from "components/layout/StyledApp";
import { render, screen } from "@testing-library/react";

// jest.mock('utils/VantaCloud', () => {
//   return jest.fn(() => () => ({
//     current: () => {
//       // Return a mock cleanup function
//       return () => {};
//     }
//   }));
// });

// HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
//   // Mock the necessary WebGL methods and properties
// });

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    render(
      <StyledApp>
        <Home />
      </StyledApp>
    );
    const elem = screen.getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});
