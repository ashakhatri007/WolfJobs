import React from "react";
import { shallow, mount } from "enzyme";
import UserApplication from "../../components/UserApplication";
import { Provider } from "react-redux";
import { configureStore } from "../../store";

const store = configureStore();

const user = {};

const application = [];

test("UserApplication", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <UserApplication user={user} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <UserApplication user={user} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
