import React from 'react';
import ReactDOM from 'react-dom';
import RegisterDoc from '../RegisterDoc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterDoc />, div);
  ReactDOM.unmountComponentAtNode(div);
});
