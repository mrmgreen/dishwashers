import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'normalize.css';
import './index.css';

import App from './App';
import ProductPage from './ProductPage';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/productpage/:productId" exact component={ProductPage} />
  </Router>,
  document.getElementById('root')
);