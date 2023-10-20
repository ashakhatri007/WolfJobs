import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Login from "../../components/Login";
import { configureStore } from "../../store";

const store = configureStore();

const login = {
  email: "test",
  password: "test",
};

const location = {
  state: "test",
};

test("login", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Login login={login} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Login login={login} location={location} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
