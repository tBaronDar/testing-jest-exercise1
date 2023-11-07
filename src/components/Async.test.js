import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async Comp", () => {
  test("renders list element", async () => {
    //Arrange
    window.fetch = jest.fn(); //overwrite fetch with mock fcn
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "test title" }],
    });
    render(<Async />);

    //Act
    //Nothing to do here

    //Assert
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
