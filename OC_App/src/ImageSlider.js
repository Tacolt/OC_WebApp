import React, {Component} from 'react';
var Slider = require('react-slick');
var $ = require('jquery')
import './ImageSlider.css';
import './slick.css';

//react-slick -- (node_module)
class SimpleSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {shingle: []};
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

  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    }

    const swatchURL = this.state.shingle.map((item, i) => {
      return <div>
        <h1>{item.shingle_colors[0].swatch_image_url}</h1>
      </div>
    });

    return (
      <div>
        <Slider>
          <div><img className="sliderImage" src={swatchURL[0]}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
          <div><img className="sliderImage" src={this.props.name}/></div>
        </Slider>

        <ul>
         <li>
           <img className="imageArray" src={swatchURL[0]}/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
           <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
         </li>
        </ul>
      </div>
    );
  }
}




export default SimpleSlider