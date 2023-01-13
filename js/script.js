//Default vatiables=======================================================================//
const menu = document.querySelector('.header__menu');
const button = document.querySelector('.demo-cont');
const tracker = document.querySelector('.header__basket-tracker');
const footerForm = document.querySelector('.footer__form');
const footerLink = document.querySelectorAll('.footer__link');
//Choose all document=====================================================================//
const body = document.querySelector('body');
const headerBasker = document.querySelector('.header__basket');

//Produtcs variables===========================================================================//
const product = document.querySelectorAll('.product');
const burgerIcon = document.querySelector('.demo-cont');
const about = document.querySelector('.header-about');
const shopBtns = document.querySelectorAll('.shop-link');
//Default functions============================================================================================//
footerLink.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
footerForm.addEventListener('click', function (e) {
  e.preventDefault();
});
tracker.innerHTML = JSON.parse(localStorage.getItem('tracker'))
  ? JSON.parse(localStorage.getItem('tracker'))
  : 0;
//BurgerMenu functions===========================================================================================
menu.classList.add('disactive');
button.addEventListener('click', function () {
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  headerBasker.classList.toggle('minus-zindex');
});

//Adding a link to shop buttons=====================================================================================\
const shopLink = function () {
  window.location.href = '../shop.html';
};
shopBtns.forEach((item) => {
  item.addEventListener('click', shopLink);
});
//Render page product=======================================================
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
  console.log(name, price, imgPath);
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

localStorage.clear();
