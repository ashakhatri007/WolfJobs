import { render, screen } from "@testing-library/react";
import React from "react";
import JobManagerView from "../../../src/components/Job/JobManagerView";
import { MemoryRouter } from "react-router";

describe("JobManagerView", () => {
  it("renders JobManagerView", () => {
    render(
      <MemoryRouter>
        <JobManagerView
          jobData={{
            _id: 1,
            managerid: 1,
            status: "open",
          }}
        />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
