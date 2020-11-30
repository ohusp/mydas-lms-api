import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordLab from './ResetPasswordLab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordLab/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
