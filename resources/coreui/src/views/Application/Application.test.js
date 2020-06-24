import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('toggle clicks', function() {
  it('dropdowns without crashing', () => {
    const wrapper = mount(<Application />);
    for (let i = 0; i < 4; i++) {
      let count = i === 0 ? 'first' : i === 1 ? 'second' : i === 2 ? 'third' : 'fourth'
      let Dropdown = wrapper.find('button.dropdown-toggle').at(i);
      Dropdown.simulate('click');
      expect(wrapper.state()[count]).toEqual(true);
    }
    wrapper.unmount()
  });
  it('collapse without crashing', () => {
    const wrapper = mount(<Application />);
    let collapse = wrapper.find('button.btn-minimize').at(0);
    collapse.simulate('click');
    expect(wrapper.state().collapse).toEqual(false);
    collapse.simulate('click');
    expect(wrapper.state().collapse).toEqual(true);
    wrapper.unmount()
  });
  it('fade without crashing', () => {
    const wrapper = mount(<Application />);
    let fade = wrapper.find('button.btn-close').at(0);
    fade.simulate('click');
    expect(wrapper.state().fadeIn).toEqual(false);
    wrapper.unmount()
  });
})
