import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginLab from './LoginLab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><LoginLab/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
