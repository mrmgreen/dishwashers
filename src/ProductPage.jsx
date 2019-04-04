import React, { Component } from 'react';
import axios from 'axios';
import filterProduct from './utils/filterProduct';

class ProductPage extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    this._isMounted = true;
    const productIdFromUrl = this.props.location.pathname.replace('/productpage/', '')
    // const gridAPI = 'https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20';
    const productAPI = `http://localhost:4000/product/${productIdFromUrl}`;
    axios.get(productAPI)
      .then(response => {
        if (response.data && response.data !== undefined ) {
          const product = filterProduct(response.data);
          if (this._isMounted){
            this.setState({ product });
          }
        }
      })
      .catch(e => console.log('Error fetching Grid API', e.message))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="product_page">
        <header>{this.state.product.title}</header>
        <div className="product_container">
          <div className="product_section_top">
            { this.state.product.media && 
              <img src={this.state.product.media.images.urls[0]} alt={this.state.product.media.images.altText}/> }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
