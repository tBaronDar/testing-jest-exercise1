import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting comp", () => {
  test('renders if "Hello World" as text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //Here we have nothing

    //Assert
    const helloWorlfElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorlfElement).toBeInTheDocument();
  });

  test("renders 'Good to see you' before button is pressed", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //nothing here

    //Assert
    const initialTextElement = screen.getByText("Good to see you", {
      exact: false,
    });
    expect(initialTextElement).toBeInTheDocument();
  });

  test("renders 'Changed' after state change", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("removes Good to see you text after button is pressed", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const textElement = screen.queryByText("Good to see you", { exact: false });
    expect(textElement).not.toBeInTheDocument();
    //Or expect(textElement).toBeNull();
  });
});
