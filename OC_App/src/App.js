//Dev: Colt Thompson
//File: App.js
//Repo: https://github.com/Tacolt/OC_WebApp.git

import React, {Component} from 'react';   //+React Module
import SimpleSlider from './ImageSlider'; //+SimpleSlider Component
var $ = require('jquery')				  //+jquery Module
import './App.css';						  //+App.css
import './ImageSlider.css';				  //+ImageSlider.css

//**ShingleList Component -- exports to Index.js
export default class ShingleList extends React.Component {

  //**Constructor(props) -- default constructor 
  constructor(props) {
    super(props);
    this.state = {shingle: []};
    this.change = this.change.bind(this);
  }

  //**GetInitialState -- gets the initial value for the line
  getInitialState() {
  	return
  		value: 'berkshire';
  }
   
  //**ComponentDidMount() -- todo
  componentDidMount() {
    this.ShingleList();
  }

  //**ShingleList() -- gets API data stores in shingle prop
  ShingleList() {
    return $.getJSON('https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659') //API call
      .then((data) => {
        this.setState({ shingle: data });
      });
  }

  //**change() -- used to change lineName onChange of <select>
  change(event){
  	this.setState({value: event.target.value});
  }

  //**Render() -- renders elements to screen
  render() {

  	//**Map() -- creates new array from shingle array
    const lineName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.name}</h1>
      </div>
    });

    //Selection Box + Displays current selection -- gets API info correctly for selection box, but had issues with displaying due to parsing issue
    return <div>
      <div>

      	  <div><h1>{this.state.value}</h1></div>

          <select className="soflow" onChange={this.change} value={this.state.value}>
            <option value='berkshire'>{lineName[0]}</option>
            <option value='devonshire'>{lineName[1]}</option>
            <option value='durationSTORM'>{lineName[2]}</option>
            <option value='durationCOOL'>{lineName[3]}</option>
            <option value='durationDESIGN'>{lineName[4]}</option>
            <option value='duration'>{lineName[5]}</option>
            <option value='oakridge'>{lineName[6]}</option>
            <option value='supreme'>{lineName[7]}</option>
          </select>
       </div>
       <br/>

       <SimpleSlider />

    </div>
  }
}