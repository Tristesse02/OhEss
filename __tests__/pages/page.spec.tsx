import { render } from '@testing-library/react';
import Home from "app/page";

describe("ue", () => {
  test("vlbn oi", () => {
    expect(5).toEqual(5);
  });
});

describe("dadf", () => {
  test("renders index page", () => {
    const { getByText } = render(<Home />);
    const elem = getByText("Hello World!");

    expect(elem).toBeInTheDocument();
  });
});