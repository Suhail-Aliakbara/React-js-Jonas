import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
import PropType from "prop-types";
import StarRating from "./Components/StarRating";

StarRating.propTypes = {
  maxRating: PropType.number,
  color: PropType.string,
  size: PropType.string,
  className: PropType.string,
  messages: PropType.array,
  onSetRating: PropType.func,
};

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);
  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
      <p>The movie was rated {movieRating} here</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      size="28px"
      color="red"
      className="Test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <Test />
  </React.StrictMode>
);
