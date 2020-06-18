import React from 'react';
import ReactDOM from 'react-dom';
import Apply from './Apply';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Apply />, div);
  ReactDOM.unmountComponentAtNode(div);
});
