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
        infoListContainer: document.querySelector("#info-reservations .info-list"),
        confirmListContainer: document.querySelector("#confirm-reservations .confirm-list"),
        verificationHeader: document.getElementById("verification")
    };
    const inputData = {}
    otherDomSelectors.nextBtn.addEventListener("click", makeReservationHandler);

    function makeReservationHandler(e) {
        e.preventDefault();
        for (const key in inputDOMSelectors) {
            inputData[key] = inputDOMSelectors[key].value;
        }

        let { firstName, lastName, dateIn, dateOut, peopleCount } = inputData;
        let isValidData = Object.values(inputData).every((value) => value !== "");
        if (!isValidData || !isValidPeriod(dateIn, dateOut)) {
            return;
        }

        const reservationListItem = createElement("li", otherDomSelectors.infoListContainer, "", ["reservation-content"]);
        const reservationDataContainer = createElement("article", reservationListItem);
        createElement("h3", reservationDataContainer, `Name: ${firstName} ${lastName}`);
        createElement("p", reservationDataContainer, `From date: ${dateIn}`);
        createElement("p", reservationDataContainer, `To date: ${dateOut}`);
        createElement("p", reservationDataContainer, `For ${peopleCount} people`);
        const editBtn = createElement("button", reservationListItem, "Edit", ["edit-btn"]);
        const continueBtn = createElement("button", reservationListItem, "Continue", ["continue-btn"]);
        editBtn.addEventListener("click", editReservationHandler);
        continueBtn.addEventListener("click", continueReservationHandler);

        otherDomSelectors.nextBtn.setAttribute("disabled", true);
        otherDomSelectors.form.reset();
    }

    function editReservationHandler() {
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = inputData[key];
        }

        otherDomSelectors.nextBtn.removeAttribute("disabled");

        this.parentNode.remove();

    }

    function continueReservationHandler() {
        const reservationListItem = this.parentNode;
        otherDomSelectors.confirmListContainer.appendChild(reservationListItem)
        const confirmBtn = createElement("button", reservationListItem, "Confirm", ["confirm-btn"]);
        const chancelBtn = createElement("button", reservationListItem, "Cancel", ["cancel-btn"]);
        confirmBtn.addEventListener("click", confirmReservationHandler);
        chancelBtn.addEventListener("click", cancelReservationHandler);

        reservationListItem.querySelector(".edit-btn").remove();
        reservationListItem.querySelector(".continue-btn").remove();

    }

    function confirmReservationHandler() {
        const reservationListItem = this.parentNode;
        reservationListItem.remove();
        otherDomSelectors.nextBtn.removeAttribute("disabled");
        otherDomSelectors.verificationHeader.classList.add("reservation-confirmed")
        otherDomSelectors.verificationHeader.textContent = "Confirmed.";
    }

    function cancelReservationHandler() {
        const reservationListItem = this.parentNode;
        reservationListItem.remove();
        otherDomSelectors.nextBtn.removeAttribute("disabled");
        otherDomSelectors.verificationHeader.classList.add("reservation-cancelled")
        otherDomSelectors.verificationHeader.textContent = "Cancelled.";
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





