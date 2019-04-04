const express = require('express');
const app = express();
const setHeadersController = require('./controller/setHeadersController');
const grid = require('./grid');
const productController = require('./controller/productController');

app.all('*', setHeadersController);
app.get('/grid', (req, res) => res.json(grid));
app.get('/product/:productId', productController);

app.listen(4000, () => console.log('Example app listening on port 4000!'))
