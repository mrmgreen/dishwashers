import filterProductsGrid from './filterProductsGrid';

describe('filterProductsGrid', () => {
  it('filters productId, title, price, and image from objects within array', () => {
    const nestedObject1 = { a:1, b:2, c:3, d:4, productId: 5, title: '1 dishwasher', price: '10', image: 'img.src' };
    const nestedObject2 = { a:2, b:3, c:4, d:5, productId: 6, title: '2 dishwasher', price: '101', image: 'another-img.src' };
    const theArray = [nestedObject1, nestedObject2];
    const expectedResult = [
      {productId: 5, title: '1 dishwasher', price: '10', image: 'img.src' },
      { productId: 6, title: '2 dishwasher', price: '101', image: 'another-img.src' }
    ];

    expect(filterProductsGrid(theArray)).toEqual(expectedResult);
  })
})