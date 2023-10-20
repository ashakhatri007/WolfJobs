import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from "../../../src/components/Header/NavBar";
import { MemoryRouter } from "react-router";

describe("NavBar", () => {
  it("renders NavBar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
