import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ProfileEdit from "../../../src/Pages/Profile/ProfileEdit";

describe("Profile", () => {
  it("renders Profile", () => {
    render(
      <MemoryRouter>
        <ProfileEdit props={{}} />
      </MemoryRouter>
    );
  });
});
