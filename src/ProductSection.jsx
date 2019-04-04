import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductPage from './ProductPage';

function ProductSection(props) {
  const { title, price: { now }, image, productId } = props.product;
  let priceToPay;

  if (typeof now === "object") {
    priceToPay = now.to;
  }

  return ( 
    <Router>
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
      <Route path="/productpage" exact component={ProductPage} />
    </Router>
  )
}

export default ProductSection;