var React = require('react');
var Slider = require('react-slick');
import './ImageSlider.css';
 
var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      
      
    };
    return (
      <div className='container'>
      <Slider {...settings}>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><img src='http://placekitten.com/g/400/200' /></div>
      </Slider>
      </div>
    );
  }
});

export default SimpleSlider