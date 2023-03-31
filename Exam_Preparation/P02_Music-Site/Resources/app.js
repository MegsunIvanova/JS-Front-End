window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        genre: document.getElementById("genre"),
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        date: document.getElementById("date")
    };

    const otherDOMSelectors = {
        addBtn: document.getElementById("add-btn"),
        allHitsContainer: document.querySelector("#all-hits > .all-hits-container"),
        savedHitsContainer: document.querySelector("#saved-hits > .saved-container"),
        form: document.querySelector("#container-text > form"),
        totalLikesParagraph: document.querySelector("#total-likes > .likes> p")
    };

    otherDOMSelectors.addBtn.addEventListener("click", addToAllHits);

    function addToAllHits(e) {
        e.preventDefault();
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
            .every((input) => input.value.trim() !== "");

        if (!allFieldsHaveValue) {
            return;
        }

        const { genre, name, author, date } = inputDOMSelectors;
        const div = createElement("div", otherDOMSelectors.allHitsContainer, "", ["hits-info"]);
        const img = createElement("img", div, "", [], "", { "src": "./static/img/img.png" });
        const h2Genre = createElement("h2", div, `Genre: ${genre.value}`);
        const h2Name = createElement("h2", div, `Name: ${name.value}`);
        const h2Author = createElement("h2", div, `Author: ${author.value}`);
        const h3Date = createElement("h3", div, `Date: ${date.value}`);
        const saveBtn = createElement("button", div, `Save song`, ["save-btn"]);
        saveBtn.addEventListener("click", saveSongHandler)
        const likeBtn = createElement("button", div, `Like song`, ["like-btn"]);
        likeBtn.addEventListener("click", likeSongHandler);
        const deleteBtn = createElement("button", div, `Delete`, ["delete-btn"]);
        deleteBtn.addEventListener("click", deleteSongHandler);
        clearAllInputs();
    }

    function likeSongHandler(e) {
        const LIKES_TEXT = "Total Likes: ";
        let currentLikes = Number((otherDOMSelectors.totalLikesParagraph.textContent).replace(LIKES_TEXT, "")) + 1;
        otherDOMSelectors.totalLikesParagraph.textContent = `${LIKES_TEXT}${currentLikes}`;
        e.currentTarget.disabled = true;
    }

    function saveSongHandler(e) {
        const parentNode = e.currentTarget.parentNode;
        // const div = parentNode.cloneNode(true);
        parentNode.querySelector(".save-btn").remove();
        parentNode.querySelector(".like-btn").remove();
        parentNode.remove();
        otherDOMSelectors.savedHitsContainer.appendChild(parentNode);
            
    }

    function deleteSongHandler (e) {
        const parentNode = e.currentTarget.parentNode;
        parentNode.remove();
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