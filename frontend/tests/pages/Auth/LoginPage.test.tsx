import { render, screen } from "@testing-library/react";
import React from "react";
import LoginPage from "../../../src/Pages/Auth/LoginPage";
import { MemoryRouter } from "react-router";

describe("LoginPage", () => {
  it("renders LoginPage", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
