function attachEvents() {
  const URL = "http://localhost:3030/jsonstore/collections/students";
  const tableBody = document.querySelector("#results > tbody");
  const firstNameInput = document.getElementsByName("firstName")[0];
  const lastNameInput = document.getElementsByName("lastName")[0];
  const facultyNumInput = document.getElementsByName("facultyNumber")[0];
  const gradeInput = document.getElementsByName("grade")[0];
  const notificationParagraph = document.querySelector("p.notification");
  const btnSubmit = document.getElementById("submit");

  loadStudentsData();
  btnSubmit.addEventListener("click", addStudentHandler);

  function loadStudentsData() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        tableBody.innerHTML = "";
        Object.values(data)
          .forEach((student) => {
            createTableRow(student);
          })
      })
      .catch((err) => {
        notificationParagraph.textContent = "Error";
        console.log(err);
      })
  }

  function addStudentHandler() {
    console.log (gradeInput)
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let facultyNumber = facultyNumInput.value;
    let grade = gradeInput.value;
    
    let httpHeaders = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    fetch(URL, httpHeaders)
      .catch((err) => {
        notificationParagraph.textContent = "Error";
        console.log(err);
      })

    loadStudentsData();

  }

  function createTableRow({ firstName, lastName, facultyNumber, grade, _id }) {
    let tableRow = createHtmlElement("tr", tableBody);
    createHtmlElement("td", tableRow, firstName);
    createHtmlElement("td", tableRow, lastName);
    createHtmlElement("td", tableRow, facultyNumber);
    createHtmlElement("td", tableRow, Number(grade).toFixed(2));
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

    return htmlElement;
  }

}

attachEvents();