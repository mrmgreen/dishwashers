import React from 'react';

function ProductSection(props) {
  const { title, price: { now }, image } = props.product;
  let priceToPay;

  if (typeof now === "object") {
    priceToPay = now.to;
  }

  return ( 
    <div className="productSection">
      <div className="product_section_top">
        <img src={image} alt="dishwasher"/>
      </div>
      <div className="product_section_bottom">
        <div className='product_title'>{title}</div>
        <div className='price'>£{ priceToPay || now}</div>
      </div>
    </div>
  )
}

export default ProductSection;