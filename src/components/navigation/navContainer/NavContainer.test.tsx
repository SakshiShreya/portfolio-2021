import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import NavContainer from "./NavContainer";

it("should render NavContainer properly", () => {
  const elem = renderer
    .create(
      <HashRouter>
        <NavContainer />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
