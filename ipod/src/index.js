// import React from "react";
// import ReactDOM from "react-dom";
// import "./assets/css/index.css";
// import App from "./components/stateful/App";

// // Rendering the React App into the HTML DOM Element "root"
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./components/stateful/App";

// Creating a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React App into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);