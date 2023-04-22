window.addEventListener('load', solve);

function solve() {
    const inputsDomSlectors = {
        productType: document.getElementById("type-product"),
        description: document.getElementById("description"),
        clientName: document.getElementById("client-name"),
        clientPhone: document.getElementById("client-phone"),
    }

    const form = document.querySelector("#right form");
    const sendBtn = document.querySelector("#right form button");
    const receivedOrdersContainer = document.getElementById("received-orders");
    const completedOrdersContainer = document.getElementById("completed-orders");
    const clearBtn = document.querySelector("#completed-orders .clear-btn");

    sendBtn.addEventListener("click", sendOrderHandler);
    clearBtn.addEventListener("click", clearHandler);

    function sendOrderHandler(e) {
        e.preventDefault();
        const isValid = Object.values(inputsDomSlectors).every((input) => input.value !== "");
        if (!isValid) {
            return;
        }

        let repairData = {};
        for (const key in inputsDomSlectors) {
            repairData[key] = inputsDomSlectors[key].value;
        }

        const container = createElement("div", receivedOrdersContainer, "", ["container"]);
        createElement("h2", container, `Product type for repair: ${repairData.productType}`);
        createElement("h3", container, `Client information: ${repairData.clientName}, ${repairData.clientPhone}`);
        createElement("h4", container, `Description of the problem: ${repairData.description}`);
        const startBtn = createElement("button", container, "Start repair", ["start-btn"]);
        const finishBtn = createElement("button", container, "Finish repair", ["finish-btn"]);
        finishBtn.disabled = true;
        startBtn.addEventListener("click", repairHandler);
        finishBtn.addEventListener("click", completeHandler);
        // form.reset();
        Object.values(inputsDomSlectors).forEach((input) => input.value = "");
    }

    function repairHandler() {
        const container = this.parentNode;
        const finishBtn = container.querySelector(".finish-btn");
        const startBtn = container.querySelector(".start-btn");
        finishBtn.removeAttribute("disabled");
        startBtn.disabled = true;
    }

    function completeHandler() {
        const container = this.parentNode;
        completedOrdersContainer.appendChild(container);
        container.querySelector(".start-btn").remove();
        container.querySelector(".finish-btn").remove();
    }

    function clearHandler() {
        Array.from(completedOrdersContainer.getElementsByClassName("container"))
            .forEach((container) => container.remove());
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