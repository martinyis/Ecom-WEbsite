//Genreal variables==================================================================================================================
const cart = document.querySelector(".cart__body");
const subTotal = document.querySelector(".totals__subtotals-price ");
const fullTotal = document.querySelector(".totals__total-price");
const proceedBtn = document.querySelector(".totals__btn");
//Proceed to payment function=========================================================================================================
proceedBtn.addEventListener("click", function () {
  window.location.href = "../billing.html";
});
//Render a product from a local storage=========================================================================================================
const generateProduct = function () {
  for (let i = 0; i < localStorage.length; i++) {
    //get key
    let key = localStorage.key(i);
    //get value
    let value = JSON.parse(localStorage.getItem(key));
    //create a new div
    if (key !== "tracker" && key !== "info") {
      let markup = `<div class="cart__item" data-product-id="${key}">
      <div class="cart__line"></div>
      <div class="cart__item-box">
        <div class="cart__item-left">
          <div class="cart__item-close">
            <picture
              ><source
                srcset="img/icons/close.webp"
                type="image/webp" />
              <img src="img/icons/close.png" alt=""
            /></picture>
          </div>
          <div class="cart__item-picture">
            <picture
              ><source
                srcset="${value.imgPath}"
                type="image/webp" />
              <img src="${value.imgPath}" alt=""
            /></picture>
          </div>
        </div>
        <div class="cart__item-right">
          <p class="cart__item-name">${value.name}</p>
          <p class="cart__item-price">${value.price}</p>
          <div class="cart__item-input">
            <input type="text" class="cart__item-quantity" />
          </div>
          <p class="cart__item-total">${value.price}</p>
        </div>
      </div>
      <div class="cart__line"></div>
    </div>`;
      // get price wihtout dollar sign
      let price = value.price.slice(1);
      //convert to number
      price = Number(price);
      //add to subtotal
      subTotal.textContent = `$${
        price + Number(subTotal.textContent.slice(1))
      }`;
      //add to fulltotal
      fullTotal.textContent = `$${
        price + Number(fullTotal.textContent.slice(1))
      }`;
      cart.insertAdjacentHTML("beforeend", markup);
    }
  }
};

generateProduct();
//Regulation functions=========================================================================================================
const decreasePrice = function (value) {
  //convert value with dollaer to noraml value
  let price = Number(value.slice(1));
  subTotal.textContent = `$${Number(subTotal.textContent.slice(1)) - price}`;
  //add to fulltotal
  fullTotal.textContent = `$${Number(fullTotal.textContent.slice(1)) - price}`;
};

const decreaseTracker = function () {
  let tracker = JSON.parse(localStorage.getItem("tracker"));
  tracker--;
  localStorage.setItem("tracker", JSON.stringify(tracker));
  document.querySelector(".header__basket-tracker").textContent = tracker;
};
const closeItem = document.querySelectorAll(".cart__item-close");
closeItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    //delete closets cart__item
    e.target.closest(".cart__item").remove();
    let prodcutId = e.target.closest(".cart__item").dataset.productId;
    let price = JSON.parse(localStorage.getItem(prodcutId)).price;
    decreaseTracker();
    decreasePrice(price);
    localStorage.removeItem(prodcutId);
  });
});
