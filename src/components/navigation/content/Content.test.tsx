import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Content from "./Content";

it("should render content properly", () => {
  const elem = renderer
    .create(
      <HashRouter>
        <Content />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});
