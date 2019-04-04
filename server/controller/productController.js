const productA = require('../product/1391191');
const productB = require('../product/3343710');
const productC = require('../product/3288787');
const productD = require('../product/3312288');
const productE = require('../product/1389483');
const productF = require('../product/3848993');
const productG = require('../product/3224246');
const productH = require('../product/2135702');
const productI = require('../product/3095171');
const productJ = require('../product/3340996');
const productK = require('../product/3229804');
const productL = require('../product/3799401');
const productM = require('../product/3241441');
const productN = require('../product/3377191');
const productO = require('../product/3328174');
const productP = require('../product/3848083');
const productQ = require('../product/1389478');
const productR = require('../product/3551565');
const productS = require('../product/3240002');
const productT = require('../product/1955287');

const lookupTable = {
  1391191: productA,
  3343710: productB,
  3288787: productC,
  3312288: productD,
  1389483: productE,
  3848993: productF,
  3224246: productG,
  2135702: productH,
  3095171: productI,
  3340996: productJ,
  3229804: productK,
  3799401: productL,
  3241441: productM,
  3377191: productN,
  3328174: productO,
  3848083: productP,
  1389478: productQ,
  3551565: productR,
  3240002: productS,
  1955287: productT
}

module.exports = function(req, res) {
  const { productId } = req.params;
  const product = lookupTable[productId];
  res.json(product);
}

