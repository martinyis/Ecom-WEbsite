import { clothes } from '../resourses/clothes.js';
const body = document.querySelector('.shopping-body');
clothes.forEach((product) => {
  const markup = `<div class="product products__product">
  <div class="product-image products__image">
    <picture
      ><source srcset="" type="image/webp" />
      <img
        src="${product.image}"
        alt="product"
    /></picture>
  </div>
  <div class="product-name products__product-name">
    ${product.name}
  </div>
  <div class="product-price products__product-name">$${product.price}</div>
</div>`;
  body.insertAdjacentHTML('beforeend', markup);
});
const product = document.querySelectorAll('.product');
const renderProduct = function (e) {
  window.location.href = '../product.html';
  let name = e.target
    .closest('.product')
    .querySelector('.product-name').textContent;
  //get pure text from a name
  name = name.trim();
  let price = e.target
    .closest('.product')
    .querySelector('.product-price').textContent;
  let imgPath = e.target.closest('.product').querySelector('img').src;
  let info = {
    name: name,
    price: price,
    imgPath: imgPath,
  };
  // add info to localstorage
  localStorage.setItem('info', JSON.stringify(info));
};
product.forEach((item) => {
  item.addEventListener('click', renderProduct);
});
