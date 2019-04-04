import React from 'react';
import { Link } from "react-router-dom";

function ProductSection(props) {
  const { title, price: { now }, image, productId } = props.product;
  let priceToPay;

  if (typeof now === "object") {
    priceToPay = now.to;
  }

  return ( 
    <div className="product_section">
      <Link to={`/productpage/${productId}`}>
        <div className="product_section_top">
          <img src={image} alt="dishwasher"/>
        </div>
        <div className="product_section_bottom">
          <div className='product_title'>{title}</div>
          <div className='price'>£{ priceToPay || now}</div>
        </div>
      </Link>
    </div>
  )
}

export default ProductSection;