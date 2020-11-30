import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordDoc from './ResetPasswordDoc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordDoc/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
