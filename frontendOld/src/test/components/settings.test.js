import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Settings from "../../components/Settings";
import { configureStore } from "../../store";

const store = configureStore();

const state = {
  name: "testss",
  password: "test",
  confirmPassword: "test",
  user_id: "test",
  userrole: "test",
  address: "test",
  phonenumber: "test",
  hours: "test",
  dob: "tests",
  gender: "tests",
  skills: "test",
};

test("Settings", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Settings state={state} />
    </Provider>
  );
});

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Settings state={state} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
