import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';
import { MemoryRouter } from 'react-router';
import axios from 'axios';

jest.mock('axios');
const productData = {
  extraField:"1234",
  productId: "1391191",
  title:"Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White",
  media: {
    images: {
        altText: "BuyIndesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White Online at johnlewis.com",
        urls: [
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt10?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt1?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt2?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt3?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt4?",
              "//johnlewis.scene7.com/is/image/JohnLewis/233326789alt9?"
          ]
      },
    "360images": {
        swfUrl: "//johnlewis.scene7.com/is/content/JohnLewis/360-degree-view",
        urls: []
    },
    videos: {
        videosList: [
              {
                type: "jlExternalVideo",
                  name: "http://www.isitetv.com/directasset/062126188249057117184209234004.m4v",
                  videoImageURL: "//johnlewis.scene7.com/is/image/JohnLewis/233326789?",
                  url: "http://www.isitetv.com/directasset/062126188249057117184209234004.m4v"
              }
          ],
          videoHost: "//johnlewis.scene7.com",
          videoImagePath: "/is/image/JohnLewis/",
          prod_vid_thmb: "$prod_vid_thmb$",
          videoHeight: "664",
          videoWidth: "664",
          imgAltText: "BuyIndesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White Online at johnlewis.com"
      }
  },
  price:{  
    now:"220.00",
  },
  details: {
    productInformation: "<p>This classic Indesit DIF 04B1 integrated dishwasher is functional and economically friendly and will make a smart addition to your kitchen. Boasting an excellent A+ energy rating, and A rated performance for washing and drying, this Indesit unit offers economic yet outstanding washing and drying results.</p>  <p>Using only 11 litres of water for 13 place settings, this dishwasher is highly efficient. 4 flexible programmes covering a range of washing requirements ensures you can have an intensive wash, handy for removing stubborn food stains, an eco wash saving on time and money and a pre-wash of your dishes. Adjustable racking makes loading and unloading a breeze and handy touch controls tops off this handy dishwasher.</p>",
  },
  displaySpecialOffer: "",
  additionalServices: {
    includedServices: [
        "2 year guarantee included"
    ],
  },
  code: "88701901",
  features: [
    {
        groupName: "",
        attributes: [
            {
                id: "attr20000353870",
                name: "Salt Level Indicator",
                toolTip: "",
                uom: "",
                value: "YES"
            },
        ]
    }
  ]
}

const productAPI = 'http://localhost:4000/product/1391191';
axios.get.mockResolvedValue({data: productData });
const location = { pathname: '/productpage/1391191' };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ProductPage location={location} />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('after product API response', () => {
  const waitForAsync = () => new Promise(resolve => setImmediate(resolve))
  const component = shallow(<ProductPage location={location} />);

  it('makes a request to the product API when the grid page loads', () => {
    expect(axios.get).toBeCalled();
    expect(axios.get).toBeCalledWith(productAPI);
  });
  
  it('renders a title', async () => {
    await waitForAsync();
    component.update();
    expect(component.find('header')).toHaveLength(1);
    expect(component.find('header').text()).toEqual("Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White");
  });

  it('renders an image', async () => {
    await waitForAsync();
    component.update();
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('img[src="//johnlewis.scene7.com/is/image/JohnLewis/233326789?"]')).toHaveLength(1);
  });
})