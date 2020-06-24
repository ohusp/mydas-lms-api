import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationsList from './ApplicationsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});