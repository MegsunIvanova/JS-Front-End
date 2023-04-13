function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/"

    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const loadBtn = document.getElementById("load-board-btn");
    const addBtn = document.getElementById("create-task-btn");

    loadBtn.addEventListener("click", loadTasksHandler);
    addBtn.addEventListener("click", createTaskHandler);

    let statusSettings = {
        "ToDo": {
            container: document.querySelector("#todo-section .task-list"),
            btnContent: "Move to In Progress",
            nextStatus: "In Progress"
        },
        "In Progress": {
            container: document.querySelector("#in-progress-section .task-list"),
            btnContent: "Move to Code Review",
            nextStatus: "Code Review"
        },
        "Code Review": {
            container: document.querySelector("#code-review-section .task-list"),
            btnContent: "Move to Done",
            nextStatus: "Done"
        },
        "Done": {
            container: document.querySelector("#done-section .task-list"),
            btnContent: "Close",
        }

    }

    function loadTasksHandler(e) {
        if (e) {
            e.preventDefault();
        }

        Object.values(statusSettings).forEach((status) => {
            status.container.innerHTML = "";
        });

        fetch(BASE_URL)
            .then((rsp) => rsp.json())
            .then((data) => {
                Object.values(data).forEach(({ title, description, status, _id }) => {
                    const taskListItem = createElement("li", statusSettings[status].container, "", ["task"], _id);
                    createElement("h3", taskListItem, title);
                    createElement("p", taskListItem, description);
                    const taskBtn = createElement("button", taskListItem, statusSettings[status].btnContent);
                    taskBtn.addEventListener("click", changeTaskStatusHandler);
                }
                )
            })
    }

    function createTaskHandler(e) {
        e.preventDefault();
        let title = titleInput.value;
        let description = descriptionInput.value;
        let status = "ToDo"


        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({ title, description, status })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadTasksHandler()
                titleInput.value = "";
                descriptionInput.value = "";
            })
    }

    function changeTaskStatusHandler() {
        const _id = this.parentNode.id;
        const status = this.textContent.replace("Move to ", "");

        const httpHeaders = {};

        if (status === "Close") {
            httpHeaders.method = "DELETE";
        } else {
            httpHeaders.method = "PATCH";
            httpHeaders.body = JSON.stringify({ status });
        }

        fetch(`${BASE_URL}${_id}`, httpHeaders)
            .then(() => {
                loadTasksHandler()
            })
    }
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


attachEvents();