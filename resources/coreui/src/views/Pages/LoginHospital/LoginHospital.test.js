import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginHospital from './LoginHospital';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginHospital/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
