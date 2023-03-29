function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    const titleInput = document.getElementById("title");
    const loadBtn = document.getElementById("load-button");
    const addBtn = document.getElementById("add-button");
    const toDoListContainer = document.getElementById("todo-list");

    loadBtn.addEventListener("click", loadTasksHandler);
    addBtn.addEventListener("click", addTaskHandler);

    function loadTasksHandler(e) {
        if (e) {
            e.preventDefault();
        }

        toDoListContainer.innerHTML = "";
        fetch(BASE_URL)
            .then((data) => data.json())
            .then((tasksRes) => {
                const tasks = Object.values(tasksRes);

                for (const { name, _id } of tasks) {
                    const li = document.createElement("li");
                    const span = document.createElement("span");
                    const removeBtn = document.createElement("button");
                    const editBtn = document.createElement("button");

                    li.id = _id;
                    span.textContent = name;
                    removeBtn.textContent = "Remove";
                    editBtn.textContent = "Edit";

                    removeBtn.addEventListener("click", removeTaskHandler);
                    editBtn.addEventListener("click", loadEditFormHandler);

                    li.append(span, removeBtn, editBtn);
                    toDoListContainer.appendChild(li);
                }
            })
            .catch(handleError);
    }

    function addTaskHandler(e) {
        e.preventDefault();
        const name = titleInput.value;
        let httpHeaders = {
            method: "POST",
            body: JSON.stringify({ name })
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadTasksHandler();
                titleInput.value = "";

            })
            .catch((err) => {
                console.log(err);
            })

        loadTasksHandler();
        titleInput.value = "";
    }

    function removeTaskHandler(e) {
        const liParent = this.parentNode;
        const id = liParent.id;
        let httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadTasksHandler())
            .catch(handleError)
    }

    function handleError(err) {
        console.log(err)
    }

    function loadEditFormHandler(e) {
        const liParent = e.currentTarget.parentNode;
        const [span, _removeBtn, editBtn] = Array.from(liParent.children);
        const editInput = document.createElement("input");
        editInput.value = span.textContent;
        liParent.prepend(editInput);

        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        submitBtn.addEventListener("click", submitTaskHandler);
        liParent.appendChild(submitBtn);
        span.remove();
        editBtn.remove();

    }

    function submitTaskHandler(e) {
        const liParent = e.currentTarget.parentNode;
        const id = liParent.id;
        const [ input ] = Array.from(liParent.children);

        const httpHeaders = {
            method: "PATCH",
            body: JSON.stringify({ name: input.value })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadTasksHandler())
            .catch(handleError);
    }
}


attachEvents();
