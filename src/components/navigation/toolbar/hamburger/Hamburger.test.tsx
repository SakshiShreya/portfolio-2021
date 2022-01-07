import renderer from "react-test-renderer";
import Hamburger from "./Hamburger";

it("should rendeer Hamburger properly", () => {
  let elem = renderer.create(<Hamburger />).toJSON();
  expect(elem).toMatchSnapshot();
});
