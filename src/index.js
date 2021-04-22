import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./components/FormContainer.jsx";
import "./App.scss";

const root = document.querySelector("#root");

const App = () => (
  <div className="app">
    <FormContainer />
  </div>
);

ReactDOM.render(<App />, root);
