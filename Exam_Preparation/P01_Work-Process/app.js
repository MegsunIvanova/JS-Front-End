function solve() {
    const inputsDomSelector = {
        firstName: document.getElementById("fname"),
        lastName: document.getElementById("lname"),
        email: document.getElementById("email"),
        birthDate: document.getElementById("birth"),
        position: document.getElementById("position"),
        salary: document.getElementById("salary")
    }

    const form = document.querySelector("#signup form");
    const hireBtn = document.getElementById("add-worker");
    const budgetSum = document.getElementById("sum");
    const tbody = document.getElementById("tbody");
    hireBtn.addEventListener("click", hireWorkerHandler);

    let budget = 0.00;
    let counter = 0;
    let workersCollection = {};

    function hireWorkerHandler(e) {
        e.preventDefault();
        let isValidData = Object.values(inputsDomSelector).every((input) => input.value !== "");
        if (!isValidData) {
            console.log("invalid data")
            return;
        }

        const worker = Object.keys(inputsDomSelector).reduce((data, key) => {
            data[key] = inputsDomSelector[key].value;
            return data;
        }, {});

        budget += Number(worker.salary);
        budgetSum.textContent = budget.toFixed(2);

        const id = `worker-${++counter}`;
        workersCollection[id] = worker;
        const tableRow = createElement("tr", tbody, "", null, id);
        createElement("td", tableRow, worker.firstName);
        createElement("td", tableRow, worker.lastName);
        createElement("td", tableRow, worker.email);
        createElement("td", tableRow, worker.birthDate);
        createElement("td", tableRow, worker.position);
        createElement("td", tableRow, worker.salary);
        const buttonsContainer = createElement("td", tableRow, "");
        const firedBtn = createElement("button", buttonsContainer, "Fired", ["fired"]);
        const editBtn = createElement("button", buttonsContainer, "Edit", ["edit"]);
        editBtn.addEventListener("click", editHandler)
        firedBtn.addEventListener("click", firedHandler)

        form.reset();
    }

    function editHandler() {
        const tableRow = this.parentNode.parentNode;
        const id = tableRow.id;
        let worker = workersCollection[id];
        for (const key in inputsDomSelector) {
           inputsDomSelector[key].value = worker[key];
        }

        budget -= Number(worker.salary);
        budgetSum.textContent = budget.toFixed(2);
        tableRow.remove();
    }

    function firedHandler () {
        const tableRow = this.parentNode.parentNode;
        const id = tableRow.id;
        let worker = workersCollection[id];
       
        budget -= Number(worker.salary);
        budgetSum.textContent = budget.toFixed(2);
        delete workersCollection[id];
        tableRow.remove();
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

solve()