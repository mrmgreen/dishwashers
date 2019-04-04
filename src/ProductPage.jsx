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

  productInformation() {
    return <div className="product_details" dangerouslySetInnerHTML={{__html: this.state.product.details.productInformation}} />
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
          <div className="product_information">
            <h2>Product information</h2>
            { this.state.product.details && this.productInformation() }
            <p>Product Code: { this.state.product.code }</p>
            <hr />
            <h2>Product specification</h2>
            <hr />
            <div className="features">
              { this.state.product.details && 
                this.state.product.details.features[0].attributes.map((feature, id) => {
                  const { name, value } = feature;
                  return (
                    <div className="featureWrapper" key={id} >
                      <div className="feature_name">{name}</div>
                      <div className="feature_value">{value}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="payment_info">
            <div className="price">£{ this.state.product.price &&  this.state.product.price.now }</div>
            <div className="displaySpecialOffer">{ this.state.product.displaySpecialOffer &&  this.state.product.displaySpecialOffer }</div>
            <div className="includedServices">{ this.state.product.additionalServices &&  this.state.product.additionalServices.includedServices }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
