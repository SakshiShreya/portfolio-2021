import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import SideNavCont from "./SideNavCont";

it("should render SideNavCont properly", () => {
  const elem = renderer
    .create(
      <HashRouter>
        <SideNavCont />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
