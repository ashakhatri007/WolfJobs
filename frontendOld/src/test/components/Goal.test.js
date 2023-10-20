import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Goal from "../../components/Goal";
import { configureStore } from "../../store";

const store = configureStore();

const error = {};

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Goal error={error} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
