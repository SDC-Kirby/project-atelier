import React, {useMemo, useEffect, useState} from 'react';
import {findRelatedProducts} from './relatedHelpers.js';
import ProductList from './ProductList.jsx';
import ProductCard from './ProductCard.jsx';

const RelatedProducts = ({current}) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    findRelatedProducts(current.id)
        .then((items) => items.map((item, key) =>
        <ProductCard key={key} product={item.product} styles={item.styles} />))
        .then((newCards) => setCards(newCards))
        .catch((err) => {
          console.error(err);
          setCards([]);
        });
  }, [current]);

  //Returns a memoized list of relatedCards unless the currently view product changes


  return (
    <div className="product-list" id="related-products">
      <span>Related Products</span>
      <ProductList cards={cards} />
  </div>
  );
}

export default RelatedProducts;