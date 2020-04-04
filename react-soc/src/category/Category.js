import './Category.css';

import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (<h1 className="category"> {this.props.title} </h1>);
  }
}

export default Category;