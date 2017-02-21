import React, {Component} from 'react';
import './App.css';
import SimpleSlider from './ImageSlider';
var $ = require('jquery')

export default class ShingleList extends React.Component {

  //	
  constructor(props) {
    super(props);
    this.state = {shingle: []};
  }
  componentDidMount() {
    this.ShingleList();
  }

  //**ShingleList() -- gets API data stores in shingle prop
  ShingleList() {
    return $.getJSON('https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659')
      .then((data) => {
        this.setState({ shingle: data });
      });
  }

  //**RENDER() -- renders elements to screen
  render() {

  	//Maps shingle line name to lineName
    const lineName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.name}</h1>
      </div>
    });

    //Maps shingle line name to lineName
    const colorName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].name}</h1>
      </div>
    });

    var swatchURL = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].swatch_image_url}</h1>
      </div>
    });

    //Displays Line Name + Color Name
    return <div>
      <div>
      <div>{lineName[0]}{colorName[0]}{swatchURL[0]}</div>
          <select>
            <option>{lineName[0]}</option>
            <option>{lineName[1]}</option>
            <option>{lineName[2]}</option>
            <option>{lineName[3]}</option>
            <option>{lineName[4]}</option>
            <option>{lineName[5]}</option>
            <option>{lineName[6]}</option>
            <option>{lineName[7]}</option>
          </select>
        </div>

       <SimpleSlider/>

    </div>
  }
}