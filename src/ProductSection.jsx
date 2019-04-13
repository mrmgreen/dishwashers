import React from 'react';
import { Link } from "react-router-dom";

function ProductSection(props) {
  const { title, price: { now }, image, productId } = props.product;
  let priceToPay;

  if (typeof now === "object") {
    priceToPay = now.to;
  }

  return ( 
    <div className="product__section">
      <Link to={`/productpage/${productId}`}>
        <div className="product__section--top">
          <img src={image} alt="dishwasher"/>
        </div>
        <div className="product__section--bottom">
          <div className='product__title'>{title}</div>
          <div className='price'>£{ priceToPay || now}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductSection;