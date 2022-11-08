//Bar variables
const barBtn = document.querySelector(".base__size");
const barMenu = document.querySelector(".base__sizes");
const baseOption = document.querySelectorAll(".base__option");
// Product info variables

const productImage = document.querySelector(".base__picture-image");
const productPicSource = document.querySelector(".base__picture");
const productTitle = document.querySelector(".base__title");
const productPrice = document.querySelector(".base__price");

//basket variables
const addBtn = document.querySelector(".base__button");
const tracker = document.querySelector(".header__basket-tracker");

//Functional variables=========================================
let nameCounter = 0;

//Changing info about product=================================================================================
const changeInfo = function () {
  //get irem from local storage a set a path for picture
  let info = JSON.parse(localStorage.getItem("info"));
  productImage.src = info.imgPath;
  productTitle.innerHTML = info.name;
  productPrice.innerHTML = info.price;
  //change a source inside a productPicSource picture elemnt
  let source = productPicSource.getElementsByTagName("source");
  source[0].srcset = info.imgPath;
};
changeInfo();

// functional for size bar==================================================================================
barMenu.classList.add("showmenu");
barBtn.addEventListener("click", function (e) {
  barMenu.classList.toggle("showmenu");
  addBtn.classList.toggle("minus-zindex");
});

baseOption.forEach((item) => {
  item.addEventListener("click", function (e) {
    addBtn.classList.remove("minus-zindex");
  });
});
const changeSize = function (size) {
  barBtn.querySelector(".base__size-name").textContent = size;
};

const pickSize = function (e) {
  let clicked = e.target.closest(".base__option");
  let size = clicked.querySelector(".base__option-name").textContent;
  let letterSize = clicked.querySelector(".base__option-letter").textContent;
  changeSize(size);
  barMenu.classList.add("showmenu");
};
barMenu.addEventListener("click", pickSize);

//Function for generating a product=================================================
const generatorName = function (name) {
  nameCounter++;
  let newName = name.replace(/ /g, "-") + `-${nameCounter}`;
  return newName;
};
// functional for basket==================================================================================
addBtn.addEventListener("click", function (e) {
  tracker.innerHTML = parseInt(tracker.innerHTML) + 1;
  let info = JSON.parse(localStorage.getItem("info"));
  let newName = generatorName(info.name);
  let productInfo = {
    name: info.name,
    price: info.price,
    imgPath: info.imgPath,
  };
  localStorage.setItem(
    `${generatorName(productInfo.name)}`,
    JSON.stringify(productInfo)
  );
  localStorage.setItem("tracker", JSON.stringify(tracker.innerHTML));
});
