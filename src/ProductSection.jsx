import React, { Fragment } from 'react';

function ProductSection(props) {
  const { title, price: { now } } = props.product;
  let priceToPay;

  if (typeof now === "object") {
    priceToPay = now.to;
  }

  return ( 
    <Fragment>
      <div className='product_title'>{title}</div>
      <div className='price'>£{ priceToPay || now}</div>
    </Fragment>
  )
}

export default ProductSection;