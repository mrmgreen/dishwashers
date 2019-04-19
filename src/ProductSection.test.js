import React from 'react';
import { shallow } from 'enzyme';
import ProductSection from './ProductSection';

const product = {
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

it('renders without crashing', () => {
  const component = shallow(<ProductSection />)
  expect(component).toHaveLength(1);
});

it('renders a product info', () => {
  const component = shallow(<ProductSection product={product} />);
  expect(component).toMatchSnapshot();
});

it('renders a price from now.to field', () => {
  const productToPrice = { ...product, price:{ now: { from:'20.00', to: '19.00' }}}
  const component = shallow(<ProductSection product={productToPrice} />);
  expect(component).toMatchSnapshot();
});