function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    const inputDomSelectors = {
        title: document.getElementById("course-name"),
        type: document.getElementById("course-type"),
        description: document.getElementById("description"),
        teacher: document.getElementById("teacher-name"),
    }

    const listContainer = document.getElementById("list");

    const loadBtn = document.getElementById("load-course");
    const addBtn = document.getElementById("add-course");
    const editBtn = document.getElementById("edit-course");

    let currentData = {};
    let editedCourse = {};


    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);
    editBtn.addEventListener("click", editHandler);


    function loadHandler(e) {
        if (e) {
            e.preventDefault()
        }
        listContainer.innerHTML = "";
        clearForm();
        editBtn.disabled = true;
        currentData = {};
        editedCourse = {};

        fetch(BASE_URL)
            .then((rsp) => rsp.json())
            .then((data) => {
                const courses = Object.values(data);
                courses.forEach(({ title, type, description, teacher, _id }) => {
                    currentData[_id] = { title, type, description, teacher, _id };
                    const container = createElement("div", listContainer, "", ["container"], _id);
                    createElement("h2", container, title);
                    createElement("h3", container, teacher);
                    createElement("h3", container, type);
                    createElement("h4", container, description);
                    const editCorseBtn = createElement("button", container, "Edit Course", ["edit-btn"]);
                    const finishCorseBtn = createElement("button", container, "Finish Course", ["finish-btn"]);
                    editCorseBtn.addEventListener("click", loadInfoForEditHandler)
                    finishCorseBtn.addEventListener("click", deleteCourseHandler)
                })
            })
            .catch((err) =>
                console.log(err));
    }

    function addHandler(e) {
        e.preventDefault();
        let course = {};
        for (const key in inputDomSelectors) {
            course[key] = inputDomSelectors[key].value;
        }

        const httpHeaders = {
            method: "POST",
            body: JSON.stringify(course)
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadHandler();
            })
    }

    function loadInfoForEditHandler() {
        const courseContainer = this.parentNode;
        const id = courseContainer.id;
        editedCourse = currentData[id];

        inputDomSelectors.title.value = editedCourse.title;
        inputDomSelectors.type.value = editedCourse.type;
        inputDomSelectors.description.value = editedCourse.description;
        inputDomSelectors.teacher.value = editedCourse.teacher;

        addBtn.disabled = true;
        editBtn.removeAttribute("disabled");
        courseContainer.remove();
    }

    function editHandler(e) {
        e.preventDefault();
        console.log("edit")
        for (const key in inputDomSelectors) {
            editedCourse[key] = inputDomSelectors[key].value;
        }

        const httpHeaders = {
            method: "PUT",
            body: JSON.stringify(editedCourse)
        }

        const url = `${BASE_URL}${editedCourse._id}`

        fetch(url, httpHeaders)
            .then(() => {
                loadHandler();
                addBtn.removeAttribute("disabled");
            })
            .catch((err) =>
                console.log(err))

    }

    function deleteCourseHandler(e) {
        const courseContainer = this.parentNode;
        const id = courseContainer.id;

        const httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                courseContainer.remove();
                delete currentData[id];
                loadHandler();
            })
            .catch((err) =>
                console.log(err))
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

    function clearForm() {
        for (const key in inputDomSelectors) {
            inputDomSelectors[key].value = "";
        }
    }

}


solve();