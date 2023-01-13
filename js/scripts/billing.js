const orderBody = document.querySelector('.order__insert');
const subTotal = document.querySelector('.order__subtotal-price');
const fullTotal = document.querySelector('.order__fulltotal-price');
const menu = document.querySelector('.header__menu');
const button = document.querySelector('.demo-cont');
const headerBasker = document.querySelector('.header__basket');
const body = document.querySelector('body');
const deliveryBtn = document.querySelector('.delivery-btn');
const popupClose = document.querySelector('.popup__close');
menu.classList.add('disactive');
button.addEventListener('click', function () {
  menu.classList.toggle('disactive');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
  headerBasker.classList.toggle('minus-zindex');
});

//delivery btn functionality=====================================================================//
deliveryBtn.addEventListener('click', function () {
  const popup = document.querySelector('.popup');
  popup.classList.remove('hidden');
  body.classList.add('lock');
});
popupClose.addEventListener('click', function () {
  const popup = document.querySelector('.popup');
  popup.classList.add('hidden');
  body.classList.remove('lock');
});
const renderItem = function () {
  let price = 0;
  for (let i = 0; i < localStorage.length; i++) {
    //get key
    let key = localStorage.key(i);
    //get value
    let value = JSON.parse(localStorage.getItem(key));
    //create a new div
    if (key !== 'tracker' && key !== 'info') {
      let markup = `<div class="order__item">
    <div class="order__name order-left">${value.name}</div>
    <div class="order__price order-right">${value.price}</div>
    </div>`;
      //count total
      price += Number(value.price.slice(1));
      subTotal.textContent = `$${price}`;
      fullTotal.textContent = `$${price}`;
      orderBody.insertAdjacentHTML('afterbegin', markup);
    }
  }
};
renderItem();
