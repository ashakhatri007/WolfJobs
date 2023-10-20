import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import App from "../../components/App";
import { configureStore } from "../../store";

const store = configureStore();

const auth = {
  isLoggedIn: "T",
};

const job = {
  desc: "test",
};

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App auth={auth} job={job} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
