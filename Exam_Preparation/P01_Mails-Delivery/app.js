function solve() {
    const formInputs = {
        recipient: document.getElementById("recipientName"),
        title: document.getElementById("title"),
        message: document.getElementById("message")
    }

    const form = document.querySelector(".addMails form");
    const addBtn = document.getElementById("add");
    const resetBtn = document.getElementById("reset");
    const mailsList = document.getElementById("list");
    const sentList = document.querySelector(".sent-list");
    const deleteList = document.querySelector(".delete-list");

    addBtn.addEventListener("click", addHandler);
    resetBtn.addEventListener("click", resetHandler);

    let mailsCollection = {};
    let counter = 0;

    function addHandler(e) {
        e.preventDefault();
        let isValid = Object.values(formInputs).every((input) => input.value !== "");
        if (!isValid) {
            return;
        }

        const mail = {};
        for (const key in formInputs) {
            mail[key] = formInputs[key].value;
        }

        const { recipient, title, message } = mail;
        let id = `mail-${++counter}`;
        mailsCollection[id] = mail;
        const mailListItem = createElement("li", mailsList, "", null, id);
        createElement("h4", mailListItem, `Title: ${title}`);
        createElement("h4", mailListItem, `Recipient Name: ${recipient}`);
        createElement("span", mailListItem, message);
        const listAction = createElement("div", mailListItem, "", null, "list-action");
        const sendBtn = createElement("button", listAction, "Send", null, "send", { type: "submit" });
        const deleteBtn = createElement("button", listAction, "Delete", null, "delete", { type: "submit" });
        sendBtn.addEventListener("click", sendHandler);
        deleteBtn.addEventListener("click", deleteHandler);
        resetHandler();
    }


    function resetHandler(e) {
        if (e) {
            e.preventDefault();
        }

        for (const key in formInputs) {
            formInputs[key].value = "";
        }
    }

    function sendHandler(e) {
        e.preventDefault();
        const mailListItem = this.parentNode.parentNode;
        let id = mailListItem.id;
        const { recipient, title, _message } = mailsCollection[id];
        const listItem = createElement("li", sentList, "", null, id);
        createElement("span", listItem, `To: ${recipient}`);
        createElement("span", listItem, `Title: ${title}`);
        const div = createElement("div", listItem, "", ["btn"]);
        const deleteBtn = createElement("button", div, "Delete", ["delete"], "", { type: "submit" });
        deleteBtn.addEventListener("click", deleteHandler);
        mailListItem.remove();
    }

    function deleteHandler(e) {
        e.preventDefault();
        const mailContainer = this.parentNode.parentNode;
        const id = mailContainer.id;
        const { recipient, title, _message } = mailsCollection[id];
        const listItem = createElement("li", deleteList, "", null, id);
        createElement("span", listItem, `To: ${recipient}`);
        createElement("span", listItem, `Title: ${title}`);
        mailContainer.remove();
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