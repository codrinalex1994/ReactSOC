import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import CategoriesContainer from './categories-container/CategoriesContainer';
import Categories from './categories/Categories';
import Header from './header/Header';
import Search from './search/Search';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Categories />
    <Search />
    <CategoriesContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
