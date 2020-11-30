import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordPatient from './ResetPasswordPatient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordPatient/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
