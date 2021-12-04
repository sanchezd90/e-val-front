import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./index.css";

const App = () => {
  return (    
      <Routes />    
  );
};
ReactDOM.render(<App />, document.getElementById("root"));