import renderer from "react-test-renderer";
import Toolbar from "./Toolbar";

it("should render Toolbar properly", () => {
  const elem = renderer.create(<Toolbar />).toJSON();
  expect(elem).toMatchSnapshot();
});
