function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/grocery/";
    const inputDOMSelectors = {
        product: document.getElementById("product"),
        count: document.getElementById("count"),
        price: document.getElementById("price")
    }

    const otherDOMSelectors = {
        addBtn: document.getElementById("add-product"),
        updateBtn: document.getElementById("update-product"),
        loadBtn: document.getElementById("load-product"),
        tbody: document.getElementById("tbody")
    }

    otherDOMSelectors.loadBtn.addEventListener("click", loadProductsHandler);
    otherDOMSelectors.addBtn.addEventListener("click", createNewProductHandler);

    async function loadProductsHandler(e) {
        if (e) {
            e.preventDefault();
        }

        otherDOMSelectors.tbody.innerHTML = "";
        const rsp = await fetch(BASE_URL);
        const data = await rsp.json();
        const products = Object.values(data);

        for (const { product, count, price, _id } of products) {
            const tr = createElement("tr", tbody, "", null, _id);
            createElement("td", tr, product, ["name"]);
            createElement("td", tr, count, ["count-product"]);
            createElement("td", tr, price, ["product-price"]);
            const tdButtons = createElement("td", tr, "", ["btn"]);
            const productUpdateBtn = createElement("button", tdButtons, "Update", ["update"]);
            productUpdateBtn.addEventListener("click", updateProductHandler);
            const productDeleteBtn = createElement("button", tdButtons, "Delete", ["delete"]);
            productDeleteBtn.addEventListener("click", deleteProductHandler);
        }

    }

    async function createNewProductHandler(e) {
        e.preventDefault();

        const isValid = Object.values(inputDOMSelectors)
            .every((input) => input.value.trim() !== "");

        if (!isValid) {
            return;
        }

        const { product, count, price } = inputDOMSelectors;

        const newProduct = {
            product: product.value,
            count: count.value,
            price: price.value
        }

        httpHeaders = {
            method: "POST",
            body: JSON.stringify(newProduct)
        }

        await fetch(BASE_URL, httpHeaders);
        loadProductsHandler();
        clearAllInputs();

    }

    async function deleteProductHandler(e) {
        const parrentNode = e.currentTarget.parentNode.parentNode;
        const id = parrentNode.id;
        httpHeaders = {
            method: "DELETE"
        }

        await fetch(`${BASE_URL}${id}`, httpHeaders);
        loadProductsHandler();

    }

    function updateProductHandler(e) {
        const parrentNode = e.currentTarget.parentNode.parentNode;
        const id = parrentNode.id;
        const oldProduct = {
            product: parrentNode.querySelector(".name").textContent,
            count: parrentNode.querySelector(".count-product").textContent,
            price: parrentNode.querySelector(".product-price").textContent
        }

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = oldProduct[key];
        }

        otherDOMSelectors.updateBtn.removeAttribute("disabled");
        otherDOMSelectors.updateBtn.addEventListener("click", () => {
            let changedProperties = {};
            for (const key in inputDOMSelectors) {
                if (inputDOMSelectors[key].value !== oldProduct[key]) {
                    changedProperties[key] = inputDOMSelectors[key].value;
                }
            }

            httpHeaders = {
                method: "PATCH",
                body: JSON.stringify(changedProperties)
            }

            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then(() => {
                    clearAllInputs();
                    otherDOMSelectors.updateBtn.disabled = true;
                    loadProductsHandler();
                })
                .catch((err) => {
                    console.log(err);
                })
        });

    }

    function clearAllInputs() {
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.value = "";
            });
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

solve();

