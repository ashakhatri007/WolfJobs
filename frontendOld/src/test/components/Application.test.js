import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Application from '../../components/Application';
import { configureStore } from '../../store';

const store = configureStore();

const app = {
  jobname: 'test',
  applicantname: 'test',
  address: 'test',
  phonenumber: 'test',
  hours: '1',
  dob: 'test',
  gender: 'male',
  skills: 'test',
  status: '1',
  manageremail: 'test',
};

const user = {
  _id: 'test',
  role: 'test',
};

test('render', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Application app={app} user={user} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
