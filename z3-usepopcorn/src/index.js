import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import StarRating from "./Components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
  </React.StrictMode>
);
