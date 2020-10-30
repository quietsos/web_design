import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Md";
const lname = "shohanuzzama";
var d = new Date();

ReactDOM.render(
  <>
  <h1>This is a demo test examaple.....</h1>
  <h3>List of favourit show</h3>
  <ol>
    <li> Avengers </li>
    <li> Dark</li>
  </ol>

  <h1>{`My name is ${fname} ${lname} `}</h1>
  <p>todays Date is </p>

  </>
  ,
  document.getElementById('root').innerHTML = d 
);
