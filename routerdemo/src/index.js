import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from "./RouterComponent"
import './style.css';
import bookStore from "./models/bookStore";

ReactDOM.render(
  <RouterComponent bookStore={bookStore}/>,
  document.getElementById('root')
);
