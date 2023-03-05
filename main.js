const products = document.querySelectorAll(".product__quantity");
const productsPrice = document.querySelectorAll(
  ".product__price span"
);
const totalPrice = document.querySelector(".total__price span");

products.forEach((product) => {
  const deleteButton = product.children[0];
  const addButton = product.children[2];
  const quantity = product.children[1];

  addButton.addEventListener("click", () => addElement(quantity));
  deleteButton.addEventListener("click", () => removeElement(quantity));
});

function addElement(quantity) {
  quantity.innerHTML = +quantity.innerHTML + 1;
  updatePrice();
}
function removeElement(quantity) {
  if (+quantity.innerHTML > 0) {
    quantity.innerHTML = +quantity.innerHTML - 1;
  }
  updatePrice();
}
function updatePrice() {
  const productsQuantity = document.querySelectorAll(".product__quantity p");
  let total = 19;

  for (let i = 0; i < productsQuantity.length; i++) {
    total += +productsQuantity[i].innerHTML * productsPrice[i].innerHTML;
  }

  totalPrice.innerHTML = (Math.round(total*100)/100).toFixed(2);
}
