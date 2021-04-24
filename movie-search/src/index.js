import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import SearchMovie from "./SearchMovie";
import movieCard from "./movieCard";
class Car extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie search</h1>
        <SearchMovie />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//API key: b417cb10275e0d9b35893f00fcad4141
reportWebVitals();
