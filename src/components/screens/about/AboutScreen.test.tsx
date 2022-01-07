import renderer from "react-test-renderer";
import AboutScreen from "./AboutScreen";

it("Should render loader in AboutScreen if no data is passed", async () => {
  let elem = renderer.create(<AboutScreen />).toJSON();
  expect(elem).toMatchSnapshot();
});

// TODO: check fetched data and error data
