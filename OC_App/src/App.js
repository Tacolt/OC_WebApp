import React, {Component} from 'react';
import './App.css';
import './ImageSlider.css';
import SimpleSlider from './ImageSlider';
var $ = require('jquery')

export default class ShingleList extends React.Component {

  getInitialState() {
  	return
  		value: 'berkshire';
  }
   
  //
  constructor(props) {
    super(props);
    this.state = {shingle: []};
    this.change = this.change.bind(this);
    
  }
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

  change(event){
  	this.setState({value: event.target.value});
  }

  //**RENDER() -- renders elements to screen
  render() {

  	//**Map() -- creates new array from shingle array
    const lineName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.name}</h1>
      </div>
    });

    

    

    //Displays Line Name + Color Name
    return <div>
      <div>

      	  <div><h1>{this.state.value}</h1></div>
          <select className="soflow" onChange={this.change} value={this.state.value}>
            <option value={lineName[0]}>{lineName[0]}</option>
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
       <SimpleSlider/>

    </div>
  }
}