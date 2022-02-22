//Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%
"use strict";


const products = [{id: 3, price: 200,},{id: 4, price: 900,},{id: 1, price: 1000,}];

products.forEach(item => {item.price = item.price - item.price * 0.15})
{
    console.log(products);
}
