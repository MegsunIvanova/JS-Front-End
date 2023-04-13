window.addEventListener('load', solve);

function solve() {
    let totalPoints = 0;
    let taskIdsCounter = 0;
    let allTasks = {}

    const inputDOMSelectors = {
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        label: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee"),
        id: document.getElementById("task-id")
    }

    const otherDomSelectors = {
        form: document.getElementById("create-task-form"),
        createBtn: document.getElementById("create-task-btn"),
        deleteBtn: document.getElementById("delete-task-btn"),
        tasksContainer: document.getElementById("tasks-section"),
        totalPointsContainer: document.getElementById("total-sprint-points")
    }

    otherDomSelectors.createBtn.addEventListener("click", createTaskHandler);
    otherDomSelectors.deleteBtn.addEventListener("click", deleteTaskHandler);

    let labelClasses = {
        "Feature": "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",
    }

    let labelIcon = {
        "Feature": "\&#8865",
        "Low Priority Bug": "\&#9737",
        "High Priority Bug": "\&#9888"
    }

    function createTaskHandler(e) {
        e.preventDefault();

        let taskData = {
            title: inputDOMSelectors.title.value,
            description: inputDOMSelectors.description.value,
            label: inputDOMSelectors.label.value,
            points: Number(inputDOMSelectors.points.value),
            assignee: inputDOMSelectors.assignee.value,
            id: `task-${++taskIdsCounter}`
        }

        let isValidTask = Object.values(taskData).every((value) => value !== "");

        if (!isValidTask) {
            return;
        }

        
        allTasks[taskData.id] = taskData;

        const taskArticle = createElement("article", otherDomSelectors.tasksContainer, "", ["task-card"], taskData.id);
        let labelDiv = createElement("div", taskArticle, `${taskData.label} ${labelIcon[taskData.label]}`, ["task-card-label", labelClasses[taskData.label]], "", null, true)
        createElement("h3", taskArticle, taskData.title, ["task-card-title"]);
        createElement("p", taskArticle, taskData.description, ["task-card-description"]);
        createElement("div", taskArticle, `Estimated at ${taskData.points} pts`, ["task-card-points"]);
        createElement("div", taskArticle, `Assigned to: ${taskData.assignee}`, ["task-card-assignee"]);
        const btnContainer = createElement("div", taskArticle, "", ["task-card-actions"]);
        const deleteCardBtn = createElement("button", btnContainer, "Delete");
        deleteCardBtn.addEventListener("click", loadConfirmDeleteHandler);

        totalPoints += taskData.points;
        otherDomSelectors.totalPointsContainer.textContent = `Total Points ${totalPoints}pts`
        otherDomSelectors.form.reset();

        // for (const key in inputDOMSelectors) {
        //     inputDOMSelectors[key].value = "";
        // }

    }

    function loadConfirmDeleteHandler(e) {
        let taskId = this.parentNode.parentNode.id;
        let task = allTasks[taskId];

        for (const key in task) {
            inputDOMSelectors[key].value = task[key];
            inputDOMSelectors[key].setAttribute("disabled", true);
        }

        otherDomSelectors.deleteBtn.removeAttribute("disabled");
        otherDomSelectors.createBtn.setAttribute("disabled", true);

    }

    function deleteTaskHandler(e) {
        e.preventDefault();
        let id = inputDOMSelectors.id.value;
        let pointsToSubtrackt = Number(allTasks[id].points);
        totalPoints -= pointsToSubtrackt;
        otherDomSelectors.totalPointsContainer.textContent = `Total Points ${totalPoints}pts`;

        delete allTasks[id];
        const taksToDelete = document.getElementById(id);
        taksToDelete.remove();

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].removeAttribute("disabled");
        }

        otherDomSelectors.form.reset();
        // for (const key in inputDOMSelectors) {
        //     inputDOMSelectors[key].value = "";
        // }
        otherDomSelectors.createBtn.removeAttribute("disabled");
        otherDomSelectors.deleteBtn.setAttribute("disabled", true);

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