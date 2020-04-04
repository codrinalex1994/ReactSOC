import './CategoryElement.css';

import React, { Component } from 'react';

class CategoryElement extends Component {
  render() {
    return (
      <div className="image-container">
        <img alt="none" src={this.props.data.strDrinkThumb}></img>
        <h1>{this.props.data.strDrink}</h1>
      </div>
    );
  }
}

export default CategoryElement;