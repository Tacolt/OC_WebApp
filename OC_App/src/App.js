import React, {Component} from 'react';
var $ = require('jquery')
import './App.css';
import SimpleSlider from './ImageSlider';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }
  componentDidMount() {
    this.UserList();
  }

  UserList() {
    return $.getJSON('https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659')
      .then((data) => {
        this.setState({ person: data });
      });
  }

  render() {
    const persons = this.state.person.map((item, i) => {
      return <div>
        <h1>{item.name}</h1>
        <span>{item.shingle_colors.swatch_image_url}</span>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ persons }</div>
    </div>
  }
}

//export default App;