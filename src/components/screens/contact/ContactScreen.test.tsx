import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ContactScreen from "./ContactScreen";

it("Should render contact screen if no data is passed", async () => {
  let elem = renderer.create(<ContactScreen />).toJSON();
  expect(elem).toMatchSnapshot();
});

describe("test sections of contact screen", () => {
  it("should have an h1 tag", () => {
    const { container } = render(<ContactScreen />);
    expect(container.querySelector("h1")).toBeDefined();
  });

  it("should have a form", () => {
    const { container } = render(<ContactScreen />);
    expect(container.querySelector("form")).toBeDefined();
  });

  it("should have links section", () => {
    const { container } = render(<ContactScreen />);
    expect(container.querySelectorAll("a")).not.toHaveLength(0);
  });
});

describe("test feedback form", () => {
  it("should have a name required name field", () => {
    const { getByLabelText } = render(<ContactScreen />);

    const nameField = getByLabelText("Name *") as HTMLInputElement;
    expect(nameField).toBeDefined();
    expect(nameField.type).toBe("text");
    expect(nameField.name).toBe("name");
    expect(nameField).toBeRequired();
  });

  it("should have a name optional email field", () => {
    const { getByLabelText } = render(<ContactScreen />);

    const emailField = getByLabelText("Email") as HTMLInputElement;
    expect(emailField).toBeDefined();
    expect(emailField.type).toBe("email");
    expect(emailField.name).toBe("email");
    expect(emailField).not.toBeRequired();
  });

  it("should have a name required message field", () => {
    const { getByLabelText } = render(<ContactScreen />);

    const msgField = getByLabelText("Message *") as HTMLTextAreaElement;
    expect(msgField).toBeDefined();
    expect(msgField.tagName).toBe("TEXTAREA");
    expect(msgField.name).toBe("message");
    expect(msgField).toBeRequired();
  });

  it("should have a submit buttom", () => {
    const { getByText } = render(<ContactScreen />);

    const submitButton = getByText("Submit") as HTMLButtonElement;
    expect(submitButton).toBeDefined();
    expect(submitButton.tagName).toBe("BUTTON");
    expect(submitButton.type).toBe("submit");
  })
});
