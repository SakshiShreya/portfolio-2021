import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Pills, { IPill } from "./Pills";

const empty: Array<IPill> = [];
  const single: Array<IPill> = [{ display: "Test1", id: "test1" }];
  const multiple: Array<IPill> = [
    { display: "Test1", id: "test1" },
    { display: "Test2", id: "test2" }
  ];

describe("test Pills length", () => {
  it("should render empty pill block if no pill", () => {
    const elem = renderer.create(<Pills list={empty} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render single pill", () => {
    const elem = renderer.create(<Pills list={single} />);
    const snapshot = elem.toJSON();
    expect(snapshot).toMatchSnapshot();

    const instance = elem.root;
    expect(instance.findAllByProps({ className: "pill primary" })).toHaveLength(1);
  });

  it("should render multiple pills", () => {
    const elem = renderer.create(<Pills list={multiple} />);
    const snapshot = elem.toJSON();
    expect(snapshot).toMatchSnapshot();

    const instance = elem.root;
    expect(instance.findAllByProps({ className: "pill primary" })).toHaveLength(multiple.length);
  });
});

describe("test Pills color", () => {
  it("should render secondary class if color='secondary' is passed", () => {
    const elem = render(<Pills list={multiple} color="secondary" />).container;
    const children = elem.querySelectorAll("li");

    for(let i = 0; i < children.length; i++) {
      expect(children[i]).toHaveClass("secondary");
    }
  });

  it("should render gray class if color='gray' is passed", () => {
    const elem = render(<Pills list={multiple} color="gray" />).container;
    const children = elem.querySelectorAll("li");

    for(let i = 0; i < children.length; i++) {
      expect(children[i]).toHaveClass("gray");
    }
  });
});
