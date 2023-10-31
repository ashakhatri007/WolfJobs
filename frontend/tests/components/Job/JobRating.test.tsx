import { render, screen } from "@testing-library/react";
import React from "react";
import JobRating from "../../../src/components/Job/JobRating";
import { MemoryRouter } from "react-router";

describe("JobRating", () => {
  it("renders JobRating", () => {
    render(
      <MemoryRouter>
        <JobRating
          jobData={{
            _id: 1,
          }}
        />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
