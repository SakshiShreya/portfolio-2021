import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Input from "./Input";

// no need to check other functionalities because those are handled by default input element
it("should render Input", () => {
  const elem = renderer.create(<Input label="test" />).toJSON();
  expect(elem).toMatchSnapshot();
});

describe("test input for type", () => {
  it("should render input of type text if text is passed", () => {
    const { container } = render(<Input label="Test" type="text" />);
    expect(container.querySelector("input")).toBeDefined();
    expect(container.querySelector("input")).toHaveAttribute("type", "text");
  });

  it("should render input of type email if email is passed", () => {
    const { container } = render(<Input label="Test" type="email" />);
    expect(container.querySelector("input")).toBeDefined();
    expect(container.querySelector("input")).toHaveAttribute("type", "email");
  });

  it("should render textarea if textarea is passed", () => {
    const { container } = render(<Input label="Test" type="textarea" />);
    expect(container.querySelector("textarea")).toBeDefined();
  });
});

it("should have correct label", () => {
  const { container } = render(<Input label="Test" />);
  expect(container.querySelector("label")).toBeDefined();
  expect(container.querySelector("label")).toHaveTextContent("Test");
});
