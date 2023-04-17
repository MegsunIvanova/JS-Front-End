window.addEventListener("load", solve);

function solve() {
  const inputDomSelectors = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content")
  }

  const form = document.querySelector("#newPost form.newPostContent");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");
  const publishBtn = document.getElementById("publish-btn");
  const clearBtn = document.getElementById("clear-btn");
  publishBtn.addEventListener("click", getFormInfoHandler);
  clearBtn.addEventListener("click", clearHandler);
  let posts = [];

  function getFormInfoHandler(e) {
    e.preventDefault();
    let isValid = Object.values(inputDomSelectors).every((input) => input.value !== "");
    if (!isValid) {
      return;
    }

    const post = {};
    for (const key in inputDomSelectors) {
      post[key] = inputDomSelectors[key].value;
    }

    let postId = posts.length;
    posts.push(post);

    let { title, category, content } = post;
    const postItem = createElement("li", reviewList, "", ["rpost"], postId);
    const postDetailsContainer = createElement("article", postItem);
    createElement("h4", postDetailsContainer, title);
    createElement("p", postDetailsContainer, `Category: ${category}`);
    createElement("p", postDetailsContainer, `Content: ${content}`);
    const editBtn = createElement("button", postItem, "Edit", ["action-btn", "edit"]);
    const approveBtn = createElement("button", postItem, "Approve", ["action-btn", "approve"]);
    editBtn.addEventListener("click", editHandler);
    approveBtn.addEventListener("click", approveHandler);

    form.reset();
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

  function editHandler() {
    const postItem = this.parentNode;
    let id = Number(postItem.id);
    let post = posts[id];
    for (const key in post) {
      inputDomSelectors[key].value = post[key];
    }
    postItem.remove();

  }

  function approveHandler() {
    const postItem = this.parentNode;
    publishedList.appendChild(postItem);
    postItem.querySelector(".edit").remove();
    postItem.querySelector(".approve").remove();
  }

  function clearHandler () {
    publishedList.innerHTML = "";
  }

}
