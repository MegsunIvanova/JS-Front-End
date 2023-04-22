window.addEventListener("load", solve);

function solve() {
    const inputDomSelectors = {
        title: document.getElementById("task-title"),
        category: document.getElementById("task-category"),
        content: document.getElementById("task-content")
    }
    const form = document.querySelector("#newPost form");
    const reviewListContainer = document.getElementById("review-list");
    const publishedListContainer = document.getElementById("published-list");
    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", publishHandler)
    let tasksData = {};
    let counter = 0;

    function publishHandler(e) {
        e.preventDefault();
        let isValid = Object.values(inputDomSelectors).every((input) => input.value !== "");
        if (!isValid) {
            return;
        }
        const task = {};
        for (const key in inputDomSelectors) {
            task[key] = inputDomSelectors[key].value;
        }
        let taskId = `task-${++counter}`;
        tasksData[taskId] = task;

        const li = createElement("li", reviewListContainer, "", ["rpost"], taskId);
        const article = createElement("article", li);
        createElement("h4", article, task.title);
        createElement("p", article, `Category: ${task.category}`);
        createElement("p", article, `Content: ${task.content}`);
        const editBtn = createElement("button", li, "Edit", ["action-btn", "edit"]);
        const postBtn = createElement("button", li, "Post", ["action-btn", "post"]);

        Object.values(inputDomSelectors).forEach((input) => input.value = "");
        editBtn.addEventListener("click", editTaskHandler);
        postBtn.addEventListener("click", postTakshandler);

    }

    function editTaskHandler() {
        const taskLi = this.parentNode;
        const taskId = taskLi.id;
        const currentTask = tasksData[taskId];
        for (const key in currentTask) {
            inputDomSelectors[key].value = currentTask[key];
        }

        taskLi.remove();
    }

    function postTakshandler() {
        const taskLi = this.parentNode;
        publishedListContainer.appendChild(taskLi);
        Array.from(taskLi.getElementsByClassName("action-btn")).forEach((btn) => btn.remove());

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