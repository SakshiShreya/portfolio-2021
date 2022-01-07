import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { NavigationContext } from "../../../../context/NavigationContext";
import Hamburger from "./Hamburger";

it("should rendeer Hamburger properly", () => {
  let elem = renderer.create(<Hamburger />).toJSON();
  expect(elem).toMatchSnapshot();
});

test("opening and closing of hamburger", () => {
  let isSideNavOpen = false;

  function setIsSideNavOpen(open: boolean) {
    isSideNavOpen = open;
  }

  const component = (isOpen: boolean) => (
    <NavigationContext.Provider value={{ isOpen, onOpen: setIsSideNavOpen }}>
      <Hamburger />
    </NavigationContext.Provider>
  );
  
  // Get button
  const { rerender } = render(component(isSideNavOpen));
  const button = screen.getByRole("button");

  // Check if it has open class
  expect(button).not.toHaveClass("open");

  // Click on button
  fireEvent.click(button);

  // Check if it has open class
  rerender(component(isSideNavOpen));
  const updatedButton = screen.getByRole("button");
  expect(updatedButton).toHaveClass("open");
});
