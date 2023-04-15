window.addEventListener("load", solve);

function solve() {
    let inputDOMSelectors = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        age: document.getElementById("age"),
        gender: document.getElementById("genderSelect"),
        description: document.getElementById("task")
    }

    let otherDomSelectors = {
        form: document.querySelector("#main form"),
        submitBtn: document.getElementById("form-btn"),
        inProgressList: document.getElementById("in-progress"),
        finishedList: document.getElementById("finished"),
        clearBtn: document.getElementById("clear-btn"),
        progressCount: document.getElementById("progress-count")
    }

    let progressCount = 0;
    let formData = {}
    otherDomSelectors.submitBtn.addEventListener("click", getInformationHandler);
    otherDomSelectors.clearBtn.addEventListener("click", clearHandller);


    function getInformationHandler(e) {
        e.preventDefault();

        const formElements = Object.values(inputDOMSelectors);

        let isValid = formElements.every((input) => input.value !== "");

        if (!isValid) {
            return;
        }

        for (const key in inputDOMSelectors) {
            formData[key] = inputDOMSelectors[key].value;
        }

        const { firstName, lastName, age, gender, description } = formData;

        const line = createElement("li", otherDomSelectors.inProgressList, "", ["each-line"])
        const article = createElement("article", line);
        createElement("h4", article, `${firstName} ${lastName}`);
        createElement("p", article, `${gender}, ${age}`);
        createElement("p", article, `Dish description: ${description}`);
        const editBtn = createElement("button", line, "Edit", ["edit-btn"]);
        const completeBtn = createElement("button", line, "Mark as complete", ["complete-btn"]);
        editBtn.addEventListener("click", editHandler);
        completeBtn.addEventListener("click", completeHandler);
        progressCount++;
        otherDomSelectors.progressCount.textContent = progressCount;
        otherDomSelectors.form.reset();

    }

    function editHandler() {
        const line = this.parentNode;
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = formData[key];
        }

        progressCount--;
        otherDomSelectors.progressCount.textContent = progressCount;

        line.remove();
    }

    function completeHandler() {
        const line = this.parentNode;
        line.querySelector(".edit-btn").remove();
        line.querySelector(".complete-btn").remove();
        otherDomSelectors.finishedList.appendChild(line);
        progressCount--;
        otherDomSelectors.progressCount.textContent = progressCount;

    }

    function clearHandller() {
        otherDomSelectors.finishedList.innerHTML = "";
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
