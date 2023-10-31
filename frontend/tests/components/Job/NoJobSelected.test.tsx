import { render, screen } from "@testing-library/react";
import React from "react";
import NoJobSelected from "../../../src/components/Job/NoJobSelected";
import { MemoryRouter } from "react-router";

describe("NoJobSelected", () => {
  it("renders NoJobSelected", () => {
    render(
      <MemoryRouter>
        <NoJobSelected />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
