import './CategoryElements.css';

import React, { Component } from 'react';

import CategoryElement from '../category-element/CategoryElement';

const axios = require('axios');

class CategoryElements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ elements: res.data.drinks ? res.data.drinks : [] });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {

    const { elements } = this.state;
    return (
      <div className="category-elements">
        {
          elements.map(element => <CategoryElement key={element.idDrink} data={element} />)
        }
      </div>
    );
  }
}

export default CategoryElements;