import React, {Component} from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import LineSelection from './LineSelection';
import SimpleSlider from './ImageSlider';

class App extends Component {

  constructor(props) {
  	super(props);
  	
  }

  render() {
  	return (
    <div>
    	<LineSelection/>
    	<br/>
    	<br/>
    	<br/>
    	<br/>
    	<br/>
    	<SimpleSlider/>
    </div>
    );
  }	
};

export default App;