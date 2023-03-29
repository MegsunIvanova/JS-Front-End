window.addEventListener("load", solve);

function solve() {
  const [firstNameInput, lastNameInput, ageInput, titleInput, submitBtn] = Array.from(document.getElementsByTagName("input"));
  const storyTextArea = document.getElementById("story");
  const form = document.getElementsByTagName("form")[0];
  const previewList = document.getElementById("preview-list");
  const h3 = previewList.getElementsByTagName("h3")[0];
  const genreMenu = document.getElementById("genre");
  const mainDiv = document.getElementById("main");
  let data = {};

  // setRequiredAndNoWhiteSpace([firstNameInput, lastNameInput, ageInput, titleInput]);
  // storyTextArea.required = true;

  submitBtn.addEventListener("click", getInformationHandler);

  function getInformationHandler() {
    data.firstName = firstNameInput.value.trim();
    data.lastName = lastNameInput.value.trim();
    data.age = ageInput.value.trim();
    data.title = titleInput.value.trim();
    data.genre = genreMenu.value.trim();
    data.story = storyTextArea.value.trim();
    for (const key in data) {
      if (data[key] === "") {
        return;
      }
    }
  
    const listItem = createHtmlElement("li", previewList, "", ["story-info"]);
    const article = createHtmlElement("article", listItem, "");
    createHtmlElement("h4", article, `Name: ${firstNameInput.value} ${lastNameInput.value}`)
    createHtmlElement("p", article, `Age: ${ageInput.value}`);
    createHtmlElement("p", article, `Title: ${titleInput.value}`);
    createHtmlElement("p", article, `Genre: ${genreMenu.value}`);
    createHtmlElement("p", article, storyTextArea.value);
    const saveBtn = createHtmlElement("button", listItem, "Save Story", ["save-btn"]);
    const editBtn = createHtmlElement("button", listItem, "Edit Story", ["edit-btn"]);
    const deleteBtn = createHtmlElement("button", listItem, "Delete Story", ["delete-btn"]);

    saveBtn.addEventListener("click", saveStoryHandler);
    editBtn.addEventListener("click", editStoryHandler);
    deleteBtn.addEventListener("click", deleteStoryHandler);

    submitBtn.disabled = true;
    form.reset();
  }

  // function setRequiredAndNoWhiteSpace(htmlElements) {
  //   for (const element of htmlElements) {
  //     element.required = true;
  //     element.pattern = ".*\S+.*";
  //   }
  // }

  function saveStoryHandler() {
    mainDiv.innerHTML = "";
    createHtmlElement("h1", mainDiv, "Your scary story is saved!");
    data = {};
  }

  function editStoryHandler() {
    firstNameInput.value = data.firstName;
    lastNameInput.value = data.lastName;
    ageInput.value = data.age;
    titleInput.value = data.title;
    genreMenu.value = data.genre;
    storyTextArea.value = data.story;
    deleteStoryHandler();
  }

  function deleteStoryHandler() {
    document.getElementsByClassName("story-info")[0].remove();
    submitBtn.disabled = false;
    data = {};
  }

  function createHtmlElement(type, parent, textContent, classes) {
    const htmlElement = document.createElement(type);
    parent.appendChild(htmlElement);
    htmlElement.textContent = textContent;
    if (classes) {
      htmlElement.classList.add(...classes);
    }

    return htmlElement;
  }

}
