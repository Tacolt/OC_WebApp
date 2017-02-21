var React = require('react');
var Slider = require('react-slick');
import './ImageSlider.css';
import './slick.css';

//react-slick -- node_module (JSX)
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
        <div className="LineSelection">
          <select onchange="updateText()" id="soflow">
            <option>{this.props.name}</option>
            <option>{this.props.name}</option>
            <option>{this.props.name}</option>
          </select>
        </div>
        <Slider>
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
          <div><img className="sliderImage" src={this.props.name}/></div>
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