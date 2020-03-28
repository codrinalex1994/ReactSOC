import React from 'react';

function Component1() {
  return (
    <div>
      <h1> List of groceries: </h1>
      <div>{createGroceriesList()}</div>
    </div>
  );
}

function getGroceries(...args) {
  var [a, b] = ["rice", "onions"];
  var c = ["garlic", "salt"];
  return [a, b, ...c, ...args];
}

function createGroceriesList() {
  var myList = "";
  getGroceries("pepper", "herbs").forEach(g => myList += `${g},`);
  return myList;
}

export default Component1;
