window.addEventListener("load", solve);

function solve() {
  let inputDomSelectors = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price")
  }

  let otherDomSelectors = {
    form: document.querySelector(".form-wrapper form"),
    publishBtn: document.getElementById("publish"),
    tableBody: document.getElementById("table-body"),
    carsList: document.getElementById("cars-list"),
    profit: document.getElementById("profit")
  }

  let totalProfit = 0;
  let counter = 0;
  let carsForSell = {};
  otherDomSelectors.publishBtn.addEventListener("click", getFormDataHandler);

  function getFormDataHandler(e) {
    e.preventDefault();
    if (!isValidData()) {
      return;
    }

    let car = {};
    for (const key in inputDomSelectors) {
      car[key] = inputDomSelectors[key].value;
    }

    let carId = `car-${++counter}`
    carsForSell[carId] = car;
    const { make, model, year, fuel, originalCost, sellingPrice } = car;

    const tableRow = createElement("tr", otherDomSelectors.tableBody, "", ["row"], carId);
    createElement("td", tableRow, make);
    createElement("td", tableRow, model);
    createElement("td", tableRow, year);
    createElement("td", tableRow, fuel);
    createElement("td", tableRow, originalCost);
    createElement("td", tableRow, sellingPrice);
    const buttonsTd = createElement("td", tableRow);
    const editBtn = createElement("button", buttonsTd, "Edit", ["action-btn", "edit"]);
    const sellBtn = createElement("button", buttonsTd, "Sell", ["action-btn", "sell"]);
    editBtn.addEventListener("click", editHandler);
    sellBtn.addEventListener("click", sellHandler);

    // otherDomSelectors.form.reset();
    for (const key in inputDomSelectors) {
      inputDomSelectors[key].value = "";
    }
  }

  function editHandler() {
    const tableRow = this.parentNode.parentNode;
    let carId = tableRow.id;
    let car = carsForSell[carId];
    for (const key in car) {
      inputDomSelectors[key].value = car[key];
    }

    tableRow.remove();
  }

  function sellHandler() {
    const tableRow = this.parentNode.parentNode;
    let carId = tableRow.id;
    const { make, model, year, fuel, originalCost, sellingPrice } = carsForSell[carId];
    let profit = Number(sellingPrice) - Number(originalCost);
    totalProfit += profit + 0.00;
    updateProfit(totalProfit);

    const listItem = createElement("li", otherDomSelectors.carsList, "", ["each-list"]);
    createElement("span", listItem, `${make} ${model}`);
    createElement("span", listItem, `${year}`);
    createElement("span", listItem, `${profit}`);

    tableRow.remove();
  }

  function updateProfit(profit) {
    otherDomSelectors.profit.textContent = profit.toFixed(2);
  }

  function isValidData() {
    const isAllFilled = Object.values(inputDomSelectors).every(input => input.value !== "");
    const originalCost = Number(inputDomSelectors.originalCost.value);
    const sellingPrice = Number(inputDomSelectors.sellingPrice.value);

    return (isAllFilled && sellingPrice > originalCost)

  }

  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHtml) {
      htmlElement.innerHTML = content;
    } else if (content && (type !== "input" || type !== "textarea")) {
      htmlElement.textContent = content;
    } else if (content && (type === "input" || type === "textarea")) {
      htmlElement.value = input;
    }

    if (classes && classes.length > 0) {
      htmlElement.classList.add(...classes);
    }

    if (id) {
      htmlElement.id = id;
    }

    //{src: "link", href: "http..."}
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    return htmlElement;
  }

}
