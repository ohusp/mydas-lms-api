import React from 'react';
import ReactDOM from 'react-dom';
import PrivacyPolicy from './PrivacyPolicy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PrivacyPolicy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
