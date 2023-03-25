function attachEvents() {
    const POSTS_URL = "http://localhost:3030/jsonstore/blog/posts";
    const COMMENTS_URL = "http://localhost:3030/jsonstore/blog/comments";

    const btnLoad = document.getElementById("btnLoadPosts");
    const btnView = document.getElementById("btnViewPost");
    const selectMenu = document.getElementById("posts");
    const postTitleElement = document.getElementById("post-title");
    const postBodyElement = document.getElementById("post-body");
    const commentsContainer = document.getElementById("post-comments");

    btnLoad.addEventListener("click", loadPostsHandler);
    btnView.addEventListener("click", viewPostsHandler);
    let postsData = null;

    async function loadPostsHandler() {
        try {
            const res = await fetch(POSTS_URL);
            const data = await res.json();
            postsData = data;
            for (const key in data) {
                const { body, id, title } = data[key];
                createHtmlElement("option", selectMenu, title, { "value": key });
            }

        } catch (err) {
            console.log(err);
        }
    }

    async function viewPostsHandler() {
        try {
            postTitleElement.textContent = "";
            postBodyElement.textContent = "";
            commentsContainer.innerHTML = "";

            const res = await fetch(COMMENTS_URL);
            const commentsData = await res.json();

            let selectedPostId = selectMenu.value;
            const { body, _id, title } = postsData[selectedPostId];
            postTitleElement.textContent = title;
            postBodyElement.textContent = body;

            Object.values(commentsData)
                .filter(({ _id, postId, _text }) => postId === selectedPostId)
                .forEach(({ id, _postId, text }) => {
                    createHtmlElement("li", commentsContainer, text, { id });
                });

        } catch (err) {
            console.log(err);
        }
    }

    function createHtmlElement(type, parent, content, attributes) {
        let htmlElement = document.createElement(type);
        if (content && type !== "input") {
            htmlElement.textContent = content;
        }

        if (content && type === "input") {
            htmlElement.value = content;
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        parent.appendChild(htmlElement);
    }
}

attachEvents();