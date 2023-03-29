function solution() {
    const URL_ARTICLES = "http://localhost:3030/jsonstore/advanced/articles/list";
    const BASE_URL_CONTENT = "http://localhost:3030/jsonstore/advanced/articles/details/";
    const mainContainer = document.getElementsByTagName("section")[0];

    createArticles();

    async function createArticles() {
        const rsp = await fetch(URL_ARTICLES);
        const data = await rsp.json();
        for (const { _id, title } of data) {
            const articleContainer = createElement("div", mainContainer, "", "", ["accordion"]);
            const headContainer = createElement("div", articleContainer, "", "", ["head"]);
            createElement("span", headContainer, title);
            const button = createElement("button", headContainer, "MORE", _id, ["button"]);
            button.addEventListener("click", showArticleHandler);
            const contentContainer = createElement("div", articleContainer, "", "", ["extra"]);
            contentContainer.style.display = "none";
            createElement("p", contentContainer, "");
        }

    }

    async function showArticleHandler(e) {
        const btn = e.currentTarget;
        const articleContainer = btn.parentNode.parentNode;
        const contentContainer = articleContainer.querySelector(".extra");
        const contentParagraph = articleContainer.querySelector(".extra > p");
       
        if (btn.textContent === "MORE") {
            const id = btn.id;
            let rsp = await fetch(`${BASE_URL_CONTENT}${id}`);
            let article = await rsp.json();

            contentParagraph.textContent = article.content;
            contentContainer.style.display = "block";
            btn.textContent = "LESS"

        } else {
            btn.textContent = "MORE"
            contentContainer.style.display = "none";
        }


    }

    function createElement(type, parentNode, content, id, classes) {
        const htmlElement = document.createElement(type);

        if (content && type !== "input") {
            htmlElement.textContent = content;
        }

        if (content && type === "input") {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        //["list", "item"]
        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}

solution();