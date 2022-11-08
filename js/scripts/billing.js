console.log("hi");

const orderBody = document.querySelector(".order__insert");
const subTotal = document.querySelector(".order__subtotal-price");
const fullTotal = document.querySelector(".order__fulltotal-price");
const renderItem = function () {
  //looop thru stirage
  let price = 0;
  for (let i = 0; i < localStorage.length; i++) {
    //get key
    let key = localStorage.key(i);
    //get value
    let value = JSON.parse(localStorage.getItem(key));
    //create a new div
    if (key !== "tracker" && key !== "info") {
      let markup = `<div class="order__item">
    <div class="order__name order-left">${value.name}</div>
    <div class="order__price order-right">${value.price}</div>
    </div>`;
      //count total
      price += Number(value.price.slice(1));
      subTotal.textContent = `$${price}`;
      fullTotal.textContent = `$${price}`;
      orderBody.insertAdjacentHTML("afterbegin", markup);
    }
  }
};
renderItem();
