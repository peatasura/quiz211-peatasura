import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let min = document.getElementById("minus");
let add = document.getElementById("add");
let re = document.getElementById("re");
let int = document.getElementById("id");
let intm = 0;
//fff

//add.addEventListener('click',function(){

//int.innerHTML+=1
//})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
