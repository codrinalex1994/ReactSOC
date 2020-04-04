import './CategoryTitle.css';

import React, { Component } from 'react';

class CategoryTitle extends Component {
  render() {
    return (<h1 className="category-title"> {this.props.title} </h1>);
  }
}

export default CategoryTitle;