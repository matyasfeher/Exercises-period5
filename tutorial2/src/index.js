import React from 'react';
import ReactDOM from 'react-dom';
import Bonjour from './Bonjour';
import myImpl from './myImpl';
import './index.css';

ReactDOM.render(
  <Bonjour />,
  <myImpl />,
  document.getElementById('root')
);