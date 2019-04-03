import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import filterProductsGrid from './utils/filterProductsGrid';
import ProductSection from './ProductSection';

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this._isMounted = true;

    // const gridAPI = 'https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20';
    const gridAPI = 'http://localhost:4000/grid';
    axios.get(gridAPI)
      .then(response => {
        if (response.data && response.data.products !== undefined ) {
          const products = filterProductsGrid(response.data.products);
          if (this._isMounted){
            this.setState({ products });
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
      <div className="App">
        <header className="App-header">
        { this.state.products.length > 0 &&
            this.state.products.map((product, id) => <ProductSection key={id} product={product} />)
        }
        </header>
      </div>
    );
  }
}

export default App;
