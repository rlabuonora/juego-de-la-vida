import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App rows={8} cols={8} speed={500} />,
  document.getElementById('root')
);
