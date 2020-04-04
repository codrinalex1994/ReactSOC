import React, { Component } from 'react';

import CategoryElements from '../category-elements/CategoryElements';
import CategoryTitle from '../category-title/CategoryTitle';

class CategoryBlock extends Component {
  render() {
    return (
      <div>
        <CategoryTitle title={this.props.data.title} />
        <CategoryElements url={this.props.data.url} />
      </div>
    );
  }
}

export default CategoryBlock;