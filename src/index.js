import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import notes from "./notes";

console.log(notes);

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
