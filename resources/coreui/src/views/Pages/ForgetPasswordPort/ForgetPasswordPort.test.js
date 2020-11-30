import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgetPasswordPort from './ForgetPasswordPort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ForgetPasswordPort/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
