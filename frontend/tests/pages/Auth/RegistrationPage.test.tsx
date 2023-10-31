import { render, screen } from "@testing-library/react";
import React from "react";
import RegistrationPage from "../../../src/Pages/Auth/RegistrationPage";
import { MemoryRouter } from "react-router";

describe("RegistrationPage", () => {
  it("renders RegistrationPage", () => {
    render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
