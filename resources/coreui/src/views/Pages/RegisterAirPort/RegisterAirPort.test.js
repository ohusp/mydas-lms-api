import React from 'react';
import ReactDOM from 'react-dom';
import RegisterAirPort from './RegisterAirPort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterAirPort />, div);
  ReactDOM.unmountComponentAtNode(div);
});
