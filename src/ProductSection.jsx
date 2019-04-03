import React from 'react';

function ProductSection(props) {
  const { title } = props.product;
  return ( <div className='product_title'>{title}</div> )
}

export default ProductSection;