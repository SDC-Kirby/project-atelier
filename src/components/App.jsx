import React from "react";
import CSSStyles from "./CSSStyles.jsx";
import Overview from "./overview/Overview.jsx";
import ProductLists from "./related/ProductLists.jsx";
import Ratings from "./ratings/Ratings.jsx";

const App = () => {
  return (
    <div>
      <CSSStyles />
      <Overview />
      <ProductLists />
      <Ratings />
    </div>
  );
}

export default App;