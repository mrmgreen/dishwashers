function filterProductsGrid(theArray) {
  return theArray.map(entireObject => {
    const { productId, title, price, image } = entireObject;
    return  { productId, title, price, image }
  })
}

export default filterProductsGrid;