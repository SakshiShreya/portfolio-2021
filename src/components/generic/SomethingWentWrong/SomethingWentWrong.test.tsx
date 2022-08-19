import { HashRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import SomethingWentWrong from "./SomethingWentWrong";

describe("snapshot testing of SomethingWentWrong Component", () => {
  it("should render SomethingWentWrong correctly if no props passed", () => {
    const elem = renderer
      .create(
        <HashRouter>
          <SomethingWentWrong />
        </HashRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render dynamic title if title is passed", () => {
    const elem = renderer
      .create(
        <HashRouter>
          <SomethingWentWrong title="Test title" />
        </HashRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it("should render properly if reload and reload function is passed", () => {
    const elem = renderer
      .create(
        <HashRouter>
          <SomethingWentWrong reload reloadFn={() => {}} />
        </HashRouter>
      )
      .toJSON();
    expect(elem).toMatchSnapshot();
  });
});
