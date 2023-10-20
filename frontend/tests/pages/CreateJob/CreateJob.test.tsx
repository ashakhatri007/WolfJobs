import { render, screen } from "@testing-library/react";
import React from "react";
import CreateJob from "../../../src/Pages/CreateJob/CreateJob";
import { MemoryRouter } from "react-router";

describe("CreateJob", () => {
  it("renders CreateJob", () => {
    render(
      <MemoryRouter>
        <CreateJob />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
