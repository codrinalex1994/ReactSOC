import './Search.css';

import React, { Component } from 'react';

class Search extends Component {
  render() {

    return (
      <div className="search-container">
        <input className="search" placeholder="Search by name"></input>
      </div>
    );
  }
}

export default Search;