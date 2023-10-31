import React from "react";
import { shallow } from "enzyme";
import Widgets from "../../components/Widgets";

test("widgets", () => {
  const wrapper = shallow(<Widgets />);
  expect(wrapper).toMatchSnapshot();
});
