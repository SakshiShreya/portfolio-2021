import renderer from "react-test-renderer";
import Name from "./Name";

it("should render Name", () => {
  const elem = renderer.create(<Name />).toJSON();
  expect(elem).toMatchSnapshot();
});

// TODO: Name should have green and orange class
