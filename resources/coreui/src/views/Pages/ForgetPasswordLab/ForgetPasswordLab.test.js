import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgetPasswordLab from './ForgetPasswordLab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ForgetPasswordLab/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
