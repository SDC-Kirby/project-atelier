import React, { useContext } from "react";
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import { OverviewContext } from "./Overview.jsx";
import { postCart } from '../../helpers.js';

const ProductInformation = () => {

  const { product, currentStyle, currentSize, loading } = useContext(OverviewContext);

  if (loading) {
    return <div className="overview-product-info loading"></div>
  }

  return (
    <div className="overview-product-info">
      <h1>{product.name}</h1>
      <section className="body-text">{product.description}</section>
      { currentStyle.sale_price ?
      <div className="sale-price-container">
        <section className="body-text sale-price">{currentStyle.sale_price} USD</section>
        <section className="body-text original-price">{product.default_price} USD</section>
      </div> :
        <section className="body-text price">{product.default_price} USD</section>
      }
      <StyleSelector />
      <SizeSelector />
      <QuantitySelector />
      <div>
        <button className="info-button add" onClick={() => postCart(currentSize)}>ADD TO BAG</button>
      </div>
    </div>
  )
}

export default ProductInformation;