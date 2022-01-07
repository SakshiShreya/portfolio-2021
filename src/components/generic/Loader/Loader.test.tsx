import renderer from "react-test-renderer";
import Loader from "./Loader";

describe("test loader for different sizes", () => {
  it("should render loader of size 20 when size={20} is passed in prop", () => {
    const elem = renderer.create(<Loader size={20} />).toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render loader of size 30 when size={30} is passed in prop", () => {
    const elem = renderer.create(<Loader size={30} />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
