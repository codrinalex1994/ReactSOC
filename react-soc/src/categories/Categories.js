import './Categories.css';

import React, { Component } from 'react';

import Category from '../category/Category';

const categories = ["Alcoholic", "Non Alcoholic", "Ordinary Drink", "Cocktail glass", "Champagne flute"];

class Categories extends Component {
  render() {
    const categoriesTemplate = [];
    categories.forEach(category => {
      categoriesTemplate.push(<Category key={category} title={category} />)
    });

    return (
      <div className="categories">{categoriesTemplate}</div>
    );
  }
}

export default Categories;