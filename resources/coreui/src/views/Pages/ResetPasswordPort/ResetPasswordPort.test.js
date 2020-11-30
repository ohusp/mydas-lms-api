import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordPort from './ResetPasswordPort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordPort/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
