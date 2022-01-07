import renderer from "react-test-renderer";
import ExperienceScreen from "./ExperienceScreen";

it("Should render loader in ExperienceScreen if no data is passed", async () => {
  let elem = renderer.create(<ExperienceScreen />).toJSON();
  expect(elem).toMatchSnapshot();
});

// TODO: check fetched data and error data
