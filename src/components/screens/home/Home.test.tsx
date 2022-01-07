import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import HomeScreen from "./HomeScreen";

it("Should render HomeScreen properly", async () => {
  let elem = renderer
    .create(
      <HashRouter>
        <HomeScreen />
      </HashRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});

// TODO: check fetched data and error data
