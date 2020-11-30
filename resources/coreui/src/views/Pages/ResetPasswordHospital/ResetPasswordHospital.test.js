import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResetPasswordHospital from './ResetPasswordHospital';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ResetPasswordHospital/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
