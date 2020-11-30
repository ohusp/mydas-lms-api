import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgetPasswordDoc from './ForgetPasswordDoc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ForgetPasswordDoc/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
