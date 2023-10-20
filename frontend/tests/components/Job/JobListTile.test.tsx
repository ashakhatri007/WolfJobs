import { render, screen } from "@testing-library/react";
import React from "react";
import JobListTile from "../../../src/components/Job/JobListTile";
import { MemoryRouter } from "react-router";

describe("JobListTile", () => {
  it("renders JobListTile", () => {
    render(
      <MemoryRouter>
        <JobListTile
          data={{
            _id: 1,
            managerAffilication: "nc-state-dining",
            pay: "100?",
            status: "closed",
          }}
        />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
