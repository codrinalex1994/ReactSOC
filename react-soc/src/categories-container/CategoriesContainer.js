import React, { Component } from 'react';

import CategoryBlock from '../category-block/CategoryBlock';

const categories = [
  {
    title: "Category 1",
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  },
  {
    title: "Category 2",
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  },
  {
    title: "Category 3",
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  },
  {
    title: "Category 4",
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
  },
  {
    title: "Category 5",
    url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute"
  },
];

class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "",
      imageTitle: ""
    }
  }

  render() {
    const categoriesTemplate = [];
    categories.forEach(category => {
      categoriesTemplate.push(<CategoryBlock func={this.openImage} key={category.title} data={category} />)
    });

    return (
      <div className="categories-container">{categoriesTemplate}</div>
    );
  }
}

export default CategoriesContainer;