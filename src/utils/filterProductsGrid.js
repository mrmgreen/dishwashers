function filterProductsGrid(theArray) {
  return theArray.map(({ productId, title, price, image }) => ({ productId, title, price, image }))
}

export default filterProductsGrid;