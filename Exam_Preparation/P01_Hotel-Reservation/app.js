window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        dateIn: document.getElementById("date-in"),
        dateOut: document.getElementById("date-out"),
        peopleCount: document.getElementById("people-count"),
    };

    const otherDomSelectors = {
        nextBtn: document.getElementById("next-btn"),
        form: document.querySelector("#append-reservation form"),
        infoListContainer: document.querySelector("#info-reservations .info-list")

    };
    const inputData = {}
    otherDomSelectors.nextBtn.addEventListener("click", makeReservationHandler);
    console.log(otherDomSelectors.form)

    function makeReservationHandler(e) {
        e.preventDefault();
        for (const key in inputDOMSelectors) {
            inputData[key] = inputDOMSelectors[key].value;
        }

        let isValidData = Object.values(inputData).every((value) => value !== "");

        if (!isValidData || !isValidPeriod(inputData.dateIn, inputData.dateOut)) {
            return;
        }

        const reservationListItem = createElement("li", otherDomSelectors.infoListContainer, "", ["reservation-content"]);
        const reservationDataContainer = createElement("article", reservationListItem);
        createElement("h3", reservationDataContainer, `Name: ${inputData.firstName} ${inputData.lastName}`);
        createElement("p", reservationDataContainer, `From date: ${inputData.dateIn}`);
        createElement("p", reservationDataContainer, `To date: ${inputData.dateOut}`);
        createElement("p", reservationDataContainer, `For ${inputData.peopleCount} people`);
        const editBtn = createElement("button", reservationListItem, "Edit", ["edit-btn"]);
        const continueBtn = createElement("button", reservationListItem, "Continue", ["continue-btn"]);
        // editBtn.addEventListener("click", )

        this.setAttribute("disabled", true);
   
        otherDomSelectors.form.reset();
    }

    function isValidPeriod(dateIn, dateOut) {
        let firstDate = new Date(dateIn).getTime();
        let secondData = new Date(dateOut).getTime();
        return secondData > firstDate;
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





