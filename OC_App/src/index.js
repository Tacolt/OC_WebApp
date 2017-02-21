import React from 'react';		  //+React Module
import ReactDOM from 'react-dom'; //+ReactDOM Module
import ShingleList from './App';  //+ShingleList Component
import './index.css';			  //+Index.css

ReactDOM.render(
  <ShingleList />, //Render -- imported from App.js
  document.getElementById('root')
);
