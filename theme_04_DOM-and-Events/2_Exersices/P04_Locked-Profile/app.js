function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));

    buttons
    .forEach((btn) => {
        btn.addEventListener('click', toggleInformation);
    });

    function toggleInformation(e) {
        const btn = e.currentTarget;
        const  currentProfile = btn.parentElement;
        const children = Array.from(currentProfile.children);
        const unlockRadioInput = children[4];
        const additionalInformation = children[9];

        if (unlockRadioInput.checked) {
            if (btn.textContent === "Show more") {
                btn.textContent = "Hide it";
                additionalInformation.style.display = "block"
            } else {
                btn.textContent = "Show more";
                additionalInformation.style.display = "none"
            }
        
         }
    }

}

// function lockedProfile() {
//     const buttons = Array.from(document.querySelectorAll(".profile button"));
//     const radioLockButtons = Array.from(document.querySelectorAll(".profile input[type='radio'][value='lock']"));
//     const hiddenFields = Array.from(document.querySelectorAll("div[id$='HiddenFields']"));
    
//     buttons.forEach((btn) => {
//         btn.addEventListener('click', clickHandler);
//     });

//     function clickHandler(e) {
//         const currentRadioLock = radioLockButtons
//             .find((input) => input.parentNode === this.parentNode);

//         if (!currentRadioLock.checked) {
//             const hiddenField = hiddenFields
//                 .find((div) => div.parentNode === this.parentNode);

//             if (this.textContent === "Show more") {
//                 this.textContent = "Hide it";
//                 hiddenField.style.display = "block"
//             } else {
//                 this.textContent = "Show more";
//                 hiddenField.style.display = "none"
//             }

//         }
//     }
// }