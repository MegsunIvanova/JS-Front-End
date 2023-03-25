function solve() {
   const addButtonsArray = Array.from(document.querySelectorAll("button.add-product"));
   const textarea = document.getElementsByTagName("textarea")[0];
   const checkOutBtn = document.querySelector("button.checkout");

   addButtonsArray.forEach((btn => btn.addEventListener("click", addHandler)));
   checkOutBtn.addEventListener("click", checkOtHandler);

   let productsInBasket = [];
   let totalPrice = 0;

   function addHandler(e) {
      const btn = e.target;
      const product = btn.parentElement.parentElement;

      let name = product.querySelector(".product-title").textContent;
      let money = Number(product.querySelector(".product-line-price").textContent);

      if (!productsInBasket.includes(name)) {
         productsInBasket.push(name);
      }
      totalPrice += money;

      textarea.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;

   }

   function checkOtHandler() {
      //result: "You bought {list} for {totalPrice}."
      //Append the result to the textarea
      textarea.value += `You bought ${productsInBasket.join(", ")} for ${totalPrice.toFixed(2)}.`

      //disable all buttons
      addButtonsArray.forEach((btn) => btn.disabled = true);
      checkOutBtn.disabled = true;

   }
}