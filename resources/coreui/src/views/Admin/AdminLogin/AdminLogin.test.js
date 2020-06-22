import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import AdminLogin from './AdminLogin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><AdminLogin/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
