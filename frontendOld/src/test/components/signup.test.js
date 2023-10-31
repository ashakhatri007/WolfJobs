import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Signup from "../../components/Signup";
import { configureStore } from "../../store";

const store = configureStore();

const error = {};

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Signup />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
