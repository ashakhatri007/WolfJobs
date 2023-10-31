import React from "react";
import { shallow } from "enzyme";
import Page404 from "../../components/Page404";

test("error404", () => {
  const wrapper = shallow(<Page404 />);
  expect(wrapper).toMatchSnapshot();
});
