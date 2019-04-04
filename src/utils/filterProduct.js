function filterProduct(objectToFilter) {
  const { title, media, price, details: { productInformation, features }, displaySpecialOffer, additionalServices: { includedServices }, code } =  objectToFilter;
  return { title, media, price, details: { productInformation, features }, displaySpecialOffer, additionalServices: { includedServices }, code };
}

export default filterProduct;