import React from 'react';
import ReactDOM from 'react-dom';
import RegisterLab from '../RegisterLab/RegisterLab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterLab />, div);
  ReactDOM.unmountComponentAtNode(div);
});
