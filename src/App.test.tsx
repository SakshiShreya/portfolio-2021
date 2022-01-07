import renderer from "react-test-renderer";
import App from "./App";

it("should render default screen", () => {
  const elem = renderer.create(<App />).toJSON();
  expect(elem).toMatchSnapshot();
});
