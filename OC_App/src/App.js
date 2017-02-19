import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Colt"/>
      <HelloWorld name="Thompson"/>
    </div>);
};

export default App;