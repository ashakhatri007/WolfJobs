import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Job from "../../components/Job";
import { configureStore } from "../../store";

const store = configureStore();

test("createJob", () => {
  const wrapper = shallow(<createJob />);
  expect(wrapper).toMatchSnapshot();
});

const job = {
  _id: 1,
  name: "test",
  status: "0",
  location: "test",
  description: "test",
  pay: "test",
  schedule: "test",
  managerid: "test",
};

const user = {
  _id: 1,
};

test("Job", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Job job={job} />
    </Provider>
  );
});

test("render", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Job job={job} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

test("HandleApplyTest", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Job job={job} auth={{ user }} />
    </Provider>
  );
});
