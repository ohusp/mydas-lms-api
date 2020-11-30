import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPort from './RegisterPort';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterPort />, div);
  ReactDOM.unmountComponentAtNode(div);
});
