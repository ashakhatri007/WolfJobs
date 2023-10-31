import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Home from "../../components/Home";
import { configureStore } from "../../store";

const store = configureStore();

test("createJob", () => {
  const wrapper = shallow(<createJob />);
  expect(wrapper).toMatchSnapshot();
});

const search = {
  results: [],
};

const job = [
  {
    _id: 1,
    name: "test",
    status: "0",
    location: "test",
    description: "test",
    pay: "test",
    schedule: "test",
    managerid: "test",
  },
];

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Home search={search} job={job} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
