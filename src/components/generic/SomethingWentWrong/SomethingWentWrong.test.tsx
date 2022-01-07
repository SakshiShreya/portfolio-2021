import renderer from "react-test-renderer";
import SomethingWentWrong from "./SomethingWentWrong";

describe("snapshot testing of SomethingWentWrong Component", () => {
  it("should render SomethingWentWrong correctly if no props passed", () => {
    const elem = renderer.create(<SomethingWentWrong />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render dynamic title if title is passed", () => {
    const elem = renderer.create(<SomethingWentWrong title="Test title" />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render properly if reload and reload function is passed", () => {
    const elem = renderer.create(<SomethingWentWrong reload reloadFn={() => {}} />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
