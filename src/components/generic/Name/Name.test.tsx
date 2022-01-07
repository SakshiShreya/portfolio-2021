import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Name from "./Name";

it("should render Name", () => {
  const elem = renderer.create(<Name />).toJSON();
  expect(elem).toMatchSnapshot();
});

describe("check green and orange class", () => {
  it("should have green class", () => {
    render(<Name />);
    expect(screen.getByTestId("green")).toBeDefined();
    expect(screen.getByTestId("green")).toHaveClass("green");
  });

  it("should have orange class", () => {
    render(<Name />);
    expect(screen.getByTestId("orange")).toBeDefined();
    expect(screen.getByTestId("orange")).toHaveClass("orange");
  });
});
