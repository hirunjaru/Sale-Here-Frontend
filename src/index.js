import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
// ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
