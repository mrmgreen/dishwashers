import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import axios from 'axios';
import ProductSection from './ProductSection';

jest.mock('axios');
const productsData = [
  {
    productId: 1391191,
    title:"Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White",
    price:{  
      was:"",
      then1:"",
      then2:"",
      now:"220.00",
      uom:"",
      currency:"GBP"
    },
    image: "//johnlewis.scene7.com/is/image/JohnLewis/233326789?",
  }
];
// const gridAPI = 'https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20';
const gridAPI = 'http://localhost:4000/grid';
axios.get.mockResolvedValue({data: { products: productsData }});
const waitForAsync = () => new Promise(resolve => setImmediate(resolve))

beforeEach(() => {
  axios.get.mockClear();
});

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toHaveLength(1);
});

it('makes a request to the product grid API when the grid page loads', () => {
  expect(axios.get).not.toBeCalled();
  shallow(<App />);
  expect(axios.get).toBeCalled();
  expect(axios.get).toBeCalledWith(gridAPI);
});

it('should render a ProductSection for each product', async () => {
  const component = shallow(<App />);
  await waitForAsync();
  component.update();
  expect(component.find(ProductSection)).toHaveLength(1);
});

it('render basic page with no products', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it('render page with products', async () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
  await waitForAsync();
  component.update();
  expect(component).toMatchSnapshot();
});