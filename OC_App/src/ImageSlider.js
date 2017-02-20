var React = require('react');
var Slider = require('react-slick');
import './ImageSlider.css';
import './slick.css';

//react-slick -- node_module
var SimpleSlider = React.createClass({
  render: function() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    return (
      <div>
        <Slider>
          <div><img className="sliderImage" src='https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_768x768s/000/000/136/original/PYS_Berk_CanterburyBlack_768x768_72dpi.jpg?1476293729'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=2'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=3'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=4'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=5'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=6'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=7'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=8'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=9'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=10'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=11'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=12'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=13'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=14'/></div>
          <div><img className="sliderImage" src='http://placehold.it/350x300?text=15'/></div>
        </Slider>

        <ul>
         <li>
           <a href='http://placehold.it/350x300?text=1'><img className="imageArray" src='http://placehold.it/350x300?text=1'/></a>
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
});


export default SimpleSlider