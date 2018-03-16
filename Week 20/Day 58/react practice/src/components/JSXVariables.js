import React from "react";

const name = "Sandon";
const length = name.length;

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {length} letters</h2>
        <h2>I think React is very convenient</h2>
        <h2>My name without vowels is:
    	</h2> 
 
      </div>
    </div>
  </div>
);

export default JSXVariables;
