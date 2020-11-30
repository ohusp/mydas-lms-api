import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordPharm from './ResetPasswordPharm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordPharm/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
