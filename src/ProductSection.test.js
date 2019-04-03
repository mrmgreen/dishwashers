import React from 'react';
import ReactDOM from 'react-dom';
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
  const div = document.createElement('div');
  ReactDOM.render(<ProductSection product />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a title', () => {
  const component = shallow(<ProductSection product />);
  expect(component.find('.product_title')).toHaveLength(1);
});