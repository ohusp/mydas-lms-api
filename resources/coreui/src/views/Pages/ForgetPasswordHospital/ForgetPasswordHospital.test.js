import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgetPasswordHospital from './ForgetPasswordHospital';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ForgetPasswordHospital/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
