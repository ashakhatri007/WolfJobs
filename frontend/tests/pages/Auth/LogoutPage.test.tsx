import { render, screen } from "@testing-library/react";
import React from "react";
import LogoutPage from "../../../src/Pages/Auth/LogoutPage";
import { MemoryRouter } from "react-router";

describe("LogoutPage", () => {
  it("renders LogoutPage", () => {
    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
