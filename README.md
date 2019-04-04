This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Starting from the create react app boiler plate meant less time focusing on setting up webpack etc.

I'm using normalize.css to clear native styles.

## `npm i`

Install the project dependencies.

## `npm run server`

Starts a node server on port 4000. This handles the request for the grid and the individual products. I created this server because the John Lewis grid and product API's were not accessible to the application when run in localhost. A Cors error was being thrown.

Error:
```
Access to XMLHttpRequest at 'https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Runs unit tests.

Notes:
- Having more time I would have added more images to the products page. Currently it just displays the first product image.
- I would also have optimised the tests. The product pages test specifically use alot of the same functionality such as await async function which should be in a before block. And I would add snapshots and simulate click events on the page.
- For speed I have kept one css file. But ideally I would use css modules and perhaps sass for clearer styles.
- I would add linting for cleaner code.