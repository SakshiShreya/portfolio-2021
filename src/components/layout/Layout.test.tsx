import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import LayoutDsk from "./LayoutDsk";
import LayoutMob from "./LayoutMob";

it("should render Desktop layout properly", () => {
  const elem = renderer
    .create(
      <HashRouter>
        <LayoutDsk />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});

it("should render Mobile layout properly", () => {
  const elem = renderer
    .create(
      <HashRouter>
        <LayoutMob />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
