import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import HomeScreen from "./HomeScreen";

it("Should render HomeScreen properly", async () => {
  let elem = renderer
    .create(
      <BrowserRouter>
        <HomeScreen />
      </BrowserRouter>
    )
    .toJSON();
  expect(elem).toMatchSnapshot();
});

it("Should have my name", () => {
  const { getByText } = render(
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  );

  expect(
    getByText((_, element) => {
      const hasText = (el: any) => el.textContent.includes("Sakshi Shreya");
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })
  ).toBeDefined();
});

it("should have a contact button", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  );

  expect(getByTestId("contact")).toHaveProperty("href", "http://localhost/contact");
});

// TODO: check fetched data and error data
