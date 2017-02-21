import React, {Component} from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
//import LineSelection from './LineSelection';
import SimpleSlider from './ImageSlider';

class App extends Component {

  constructor(props) {
  	super(props);
  	
  }

  render() {
  	return (
    <div>
    	<br/>
    	<SimpleSlider name="https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_768x768s/000/000/136/original/PYS_Berk_CanterburyBlack_768x768_72dpi.jpg?1476293729"/>
    </div>
    );
  }

  handleLineChange(){

  }

  handleTextChange(){
  	
  }

  handleImageChange(){

  }
};

export default App;