import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./assets/StarRating.jsx";
import App from "./App.jsx";
import './index.css'

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   const HandleExternalRating = (movieRating) => setMovieRating(movieRating);
//   return (
//     <div>
//       <StarRating
//         HandleExternalRating={HandleExternalRating}
//         color="orange"
//       ></StarRating>
//       <p>this movie has {movieRating} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
