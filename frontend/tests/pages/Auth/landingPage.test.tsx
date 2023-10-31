import { render, screen } from "@testing-library/react";
import React from "react";
import LandingPage from "../../../src/Pages/Auth/landingPage";
import { MemoryRouter } from "react-router";

describe("LandingPage", () => {
  it("renders LandingPage", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
