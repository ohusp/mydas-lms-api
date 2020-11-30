import React from 'react';
import ReactDOM from 'react-dom';
import ProvidersAgreement from './ProvidersAgreement';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProvidersAgreement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
