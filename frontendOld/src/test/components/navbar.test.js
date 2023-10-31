import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Navbar from "../../components/Navbar";
import { configureStore } from "../../store";

const store = configureStore();

const auth = {
  isLoggedIn: "test",
};

const user = {
  name: "test",
  role: "test",
};

test("navbar", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Navbar auth={auth} user={user} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

// test('render', () => {
//    const wrapper = mount(
//        <Provider store={store}>
//            <Navbar  auth={auth} user={user} />
//        </Provider>
//    );
//    expect(wrapper).toMatchSnapshot();

// });
