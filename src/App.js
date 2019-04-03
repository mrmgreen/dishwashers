import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import filterProductsGrid from './utils/filterProductsGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // const gridAPI = 'https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20';
    const gridAPI = 'http://localhost:4000/grid';
    axios.get(gridAPI)
      .then(response => {
        const products = filterProductsGrid(response.data.products);
      })
      .catch(e => console.log('Error fetching Grid API', e.message))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
