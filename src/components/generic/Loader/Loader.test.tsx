import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Loader from "./Loader";

it("should render Loader", () => {
  const elem = renderer.create(<Loader size={20} />).toJSON();
  expect(elem).toMatchSnapshot();
});

describe("test loader for different sizes", () => {
  it("should render loader of size 20 when size={20} is passed in prop", () => {
    const { container } = render(<Loader size={20} />);
    expect(container.querySelector(".loader")).toBeDefined();
    expect(container.querySelector(".loader")).toHaveClass("loader_20");
  });

  it("should render loader of size 30 when size={30} is passed in prop", () => {
    const { container } = render(<Loader size={30} />);
    expect(container.querySelector(".loader")).toBeDefined();
    expect(container.querySelector(".loader")).toHaveClass("loader_30");
  });
});
