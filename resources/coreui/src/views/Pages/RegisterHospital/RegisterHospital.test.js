import React from 'react';
import ReactDOM from 'react-dom';
import RegisterHospital from '../RegisterHospital/RegisterHospital';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterHospital />, div);
  ReactDOM.unmountComponentAtNode(div);
});
