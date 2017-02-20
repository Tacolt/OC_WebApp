var React = require('react');
var Slider = require('react-slick');
import './ImageSlider.css';
import './slick.css';
 
var SimpleSlider = React.createClass({
  render: function() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true
    }
    return (
      <div>
        <Slider>
          <div><img src='http://placehold.it/350x300?text=1'/></div>
          <div><img src='http://placehold.it/350x300?text=2'/></div>
          <div><img src='http://placehold.it/350x300?text=3'/></div>
        </Slider>

        <ul>
         <li>
         <img className="imageArray" src='http://placehold.it/350x300?text=1'/>
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