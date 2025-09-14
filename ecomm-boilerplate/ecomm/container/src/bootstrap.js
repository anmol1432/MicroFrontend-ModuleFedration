 import { mount as mountProduct } from 'products/ProductsIndex';
 import { mount as mountCart } from 'cart/CartIndex';

let productEle = document.querySelector('#dev-products-container')
console.log("===========================>",productEle)
mountProduct(productEle);
const cartEle = document.querySelector('#cart-dev-container')
console.log("===========================>",cartEle)
mountCart(cartEle)