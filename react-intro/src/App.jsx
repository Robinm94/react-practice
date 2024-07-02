import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Arjun",
      breed: "German Shepard",
    }),
    React.createElement(Pet, {
      animal: "Parrot",
      name: "Thathumae",
      breed: "Rose Ringed Parakeets",
    }),
    React.createElement(Pet, {
      animal: "Chicken",
      name: "Korri",
      breed: "Kerala Chicken",
    }),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
