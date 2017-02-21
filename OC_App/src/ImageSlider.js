import React, {Component} from 'react';
var Slider = require('react-slick');
var $ = require('jquery');
import './ImageSlider.css';
import './slick.css';

//react-slick -- (node_module)
class SimpleSlider extends React.Component {

  getInitialState() {
    return
        value: ' '; 
  }


  constructor(props) {
    super(props);
    this.state = {shingle: []};
    this.nextColor = this.nextColor.bind(this);
    //this.previousColor = this.previousColor.bind(this);
  }

  componentDidMount() {
    this.ShingleList();
  }

  ShingleList() {
    return $.getJSON('https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659')
      .then((data) => {
        this.setState({ shingle: data });
      });
  }

  nextColor(event){
     this.setState({value: event.target.value});
  }

  nextColor(event){
     this.setState({value: event.target.value});
  }

  render() {

    //react-slick -- (node_module) -- Settings: refer to package site for properties
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    }

    //Maps shingle line name to lineName
    const colorName = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].name}</h1>
      </div>
    });

    const swatchURL = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].swatch_image_url}</h1>
      </div>
    });

    //react-slick -- (node_module)
    return (
      <div>
        <h1>{this.state.value}</h1>
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