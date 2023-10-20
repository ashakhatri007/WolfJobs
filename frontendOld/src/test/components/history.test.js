import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import History from "../../components/History";
import { configureStore } from "../../store";

const store = configureStore();

const user = {
  _id: "test",
};

const application = [];

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <History user={user} application={application} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
