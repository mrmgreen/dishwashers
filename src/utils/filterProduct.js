function filterProduct(objectToFilter) {
  const { title, media, price, details: { productInformation }, displaySpecialOffer, additionalServices: { includedServices }, code, features } =  objectToFilter;
  return { title, media, price, details: { productInformation }, displaySpecialOffer, additionalServices: { includedServices }, code, features };
}

export default filterProduct;