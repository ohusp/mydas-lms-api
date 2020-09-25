import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginPharm from './LoginPharm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginPharm/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
