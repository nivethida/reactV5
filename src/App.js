import React from 'react';
import ReactDOM from 'react-dom';
import Pet  from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "dog" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktail",
    }),
    React.createElement(Pet, { name: "Snow", animal: "Cat", breed: "Malta" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
