import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgetPasswordPharm from './ForgetPasswordPharm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ForgetPasswordPharm/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
