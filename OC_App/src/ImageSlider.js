//Dev: Colt Thompson
//File: App.js
//Repo: https://github.com/Tacolt/OC_WebApp.git

import React, {Component} from 'react'; //+React Module
var Slider = require('react-slick');    //+React-Slick Module
var $ = require('jquery');              //+jquery Module
import './ImageSlider.css';             //+ImageSlider.css
import './slick.css';                   //+Slick.css

//react-slick -- (node_module)
class SimpleSlider extends React.Component {

  //**Constructor(props) -- default constructor 
  constructor(props) {
    super(props);
    this.state = {shingle: []};
    this.nextColor = this.nextColor.bind(this); //todo
  }

  //**GetInitialState -- gets the initial value for the line
  getInitialState() {
    return
        value: ' '; 
  }

  //**ComponentDidMount() -- etc.
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

  //todo
  nextColor(event){
     this.setState({value: event.target.value});
  }

  //todo
  nextColor(event){
     this.setState({value: event.target.value});
  }
  
  //**Render() -- renders elements to screen
  render() {

    //**Map() -- creates new 'colorName' array from shingle array
    const colorName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].name}</h1>
      </div>
    });

    //**Map() -- creates new 'lineName' array from shingle array
    const swatchURL = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].swatch_image_url}</h1>
      </div>
    });

    //react-slick(node_module) -- Settings: refer to package site for properties
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    }

    //react-slick(node_module) -- Below is the image slider and list of shingle color images. Had trouble with parsing API data so images are not displaying...
    return (
      <div>

        <div><h3>{colorName[0]}</h3></div>
        <Slider>
          <div><img className="sliderImage" src={swatchURL[0]}/></div>
          <div><img className="sliderImage" src={swatchURL[1]}/></div>
          <div><img className="sliderImage" src={swatchURL[2]}/></div>
          <div><img className="sliderImage" src={swatchURL[3]}/></div>
          <div><img className="sliderImage" src={swatchURL[4]}/></div>
          <div><img className="sliderImage" src={swatchURL[5]}/></div>
          <div><img className="sliderImage" src={swatchURL[6]}/></div>
          <div><img className="sliderImage" src={swatchURL[7]}/></div>
          <div><img className="sliderImage" src={swatchURL[8]}/></div>
          <div><img className="sliderImage" src={swatchURL[9]}/></div>
          <div><img className="sliderImage" src={swatchURL[10]}/></div>
          <div><img className="sliderImage" src={swatchURL[11]}/></div>
          <div><img className="sliderImage" src={swatchURL[12]}/></div>
          <div><img className="sliderImage" src={swatchURL[13]}/></div>
          <div><img className="sliderImage" src={swatchURL[14]}/></div>
        </Slider>

        <ul>
         <li>
           <img className="imageArray" src={swatchURL[0]}/>
           <img className="imageArray" src={swatchURL[1]}/>
           <img className="imageArray" src={swatchURL[2]}/>
           <img className="imageArray" src={swatchURL[3]}/>
           <img className="imageArray" src={swatchURL[4]}/>
           <img className="imageArray" src={swatchURL[5]}/>
           <img className="imageArray" src={swatchURL[6]}/>
           <img className="imageArray" src={swatchURL[7]}/>
           <img className="imageArray" src={swatchURL[8]}/>
           <img className="imageArray" src={swatchURL[9]}/>
           <img className="imageArray" src={swatchURL[10]}/>
           <img className="imageArray" src={swatchURL[11]}/>
           <img className="imageArray" src={swatchURL[12]}/>
           <img className="imageArray" src={swatchURL[13]}/>
           <img className="imageArray" src={swatchURL[14]}/>
         </li>
        </ul>
      </div>
    );
  }
}

export default SimpleSlider