window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    const inputDOMSelectors = {
        genre: document.querySelector("input[name='genre']"),
        name: document.querySelector("input[name='name']"),
        author: document.querySelector("input[name='author']"),
        date: document.querySelector("input[name='date']")
    };

    const otherDOMSelectors = {
        addBtn: document.getElementById("add-btn"),
        allHitsContainer: document.querySelector("#all-hits > .all-hits-container"),
        savedHitsContainer: document.querySelector("#saved-hits > .saved-container"),
        totalLikesContainer: document.querySelector("#total-likes > .likes> p"),
        form: document.querySelector("#container-text > form")
    };

    otherDOMSelectors.addBtn.addEventListener("click", addSongHandler);

    function addSongHandler(e) {
        e.preventDefault();
        const allInputsAreNonEmpty = Object.values(inputDOMSelectors)
            .every((input) => input.value !== "");

        if (!allInputsAreNonEmpty) {
            return;
        }

        const { genre, name, author, date } = inputDOMSelectors;
        const songContainer = createElement("div", otherDOMSelectors.allHitsContainer, "", ["hits-info"]);
        createElement("img", songContainer, null, null, null, { src: "./static/img/img.png" });
        createElement("h2", songContainer, `Genre: ${genre.value}`);
        createElement("h2", songContainer, `Name: ${name.value}`);
        createElement("h2", songContainer, `Author: ${author.value}`);
        createElement("h3", songContainer, `Date: ${date.value}`);
        const saveBtn = createElement("button", songContainer, "Save song", ["save-btn"]);
        const likeBtn = createElement("button", songContainer, "Like song", ["like-btn"]);
        const deleteBtn = createElement("button", songContainer, "Delete", ["delete-btn"]);
        saveBtn.addEventListener("click", saveSongHandler);
        likeBtn.addEventListener("click", likeSongHandler);
        deleteBtn.addEventListener("click", deleteSongHandler);
        clearAllInputs();

    }

    function likeSongHandler() {
        this.setAttribute("disabled", true);
        totalLikes++;
        otherDOMSelectors.totalLikesContainer.textContent = `Total Likes: ${totalLikes}`;
    }

    function saveSongHandler() {
        const songRef = this.parentNode; //this is an object reference
        const saveBtn = songRef.querySelector(".save-btn");
        const likeBtn = songRef.querySelector(".like-btn");
        otherDOMSelectors.savedHitsContainer.appendChild(songRef);

        saveBtn.remove();
        likeBtn.remove();
    }

    function deleteSongHandler() {
        this.parentNode.remove();
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