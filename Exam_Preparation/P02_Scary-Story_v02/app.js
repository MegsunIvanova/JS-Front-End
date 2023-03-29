window.addEventListener("load", solve);

function solve() {
  const storyState = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null
  };

  const inputDOMSelectors = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    title: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    story: document.getElementById("story")
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById("form-btn"),
    previewList: document.getElementById("preview-list"),
    mainContainer: document.getElementById("main")
  };

  otherDOMSelectors.publishBtn.addEventListener("click", publishStoryHandler);

  function publishStoryHandler() {
    //input fields validation:
    const allFieldsHaveValue = Object.values(inputDOMSelectors)
      .every((input) => input.value.trim() !== "");

    if (!allFieldsHaveValue) {
      return;
    }

    const { firstName, lastName, age, title, genre, story } = inputDOMSelectors;
    const li = createElement("li", otherDOMSelectors.previewList, null, ["story-info"]);
    const article = createElement("article", li);
    createElement("h4", article, `Name: ${firstName.value} ${lastName.value}`)
    createElement("p", article, `Age: ${age.value}`);
    createElement("p", article, `Title: ${title.value}`);
    createElement("p", article, `Genre: ${genre.value}`);
    createElement("p", article, story.value);
    const saveBtn = createElement("button", li, "Save Story", ["save-btn"]);
    const editBtn = createElement("button", li, "Edit Story", ["edit-btn"]);
    const deleteBtn = createElement("button", li, "Delete Story", ["delete-btn"]);

    saveBtn.addEventListener("click", saveStoryHandler);
    editBtn.addEventListener("click", editStoryHandler);
    deleteBtn.addEventListener("click", deleteStoryHandler);

    for (const key in inputDOMSelectors) {
      storyState[key] = inputDOMSelectors[key].value;
    }

    clearAllInputs();
    otherDOMSelectors.publishBtn.setAttribute("disabled", true);
  }

  function clearAllInputs() {
    Object.values(inputDOMSelectors)
      .forEach((input) => {
        input.value = "";
      });
  }

  function saveStoryHandler() {
    otherDOMSelectors.mainContainer.innerHTML = "";
    createElement("h1", otherDOMSelectors.mainContainer, "Your scary story is saved!");
  }

  function editStoryHandler() {
    for (const key in inputDOMSelectors) {
      inputDOMSelectors[key].value = storyState[key];
    }

    otherDOMSelectors.publishBtn.removeAttribute("disabled");
    otherDOMSelectors.previewList.innerHTML = "";
    createElement("h3", otherDOMSelectors.previewList, "Preview");
  }

  function deleteStoryHandler(event) {
    const liItem = event.currentTarget.parentNode;
    liItem.remove();
    otherDOMSelectors.publishBtn.removeAttribute("disabled");
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
