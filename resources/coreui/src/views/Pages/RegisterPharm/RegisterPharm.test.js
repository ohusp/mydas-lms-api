import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPharm from '../RegisterPharm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterPharm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
