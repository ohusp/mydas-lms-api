import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginAirPort from './LoginAirPort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginAirPort/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
