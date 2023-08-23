import { render } from "@testing-library/react";
import Home from "app/page";
import { ThemeProvider } from "styled-components";
import defaultTheme from "themes/default.json";


describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    const { getByText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Home />
      </ThemeProvider>
    );
    const elem = getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});
