function lockedProfile() {
    const URL = "http://localhost:3030/jsonstore/advanced/profiles";
    const main = document.getElementById("main");
    const profileForm = document.getElementsByClassName("profile")[0];
    const profileFormCloning = profileForm.cloneNode(true);
    profileForm.remove();

    loadProfiles();

    async function loadProfiles() {
        let res = await fetch(URL);
        let data = await res.json();
        let count = 0;
        for (const profile of Object.values(data)) {
            createForm(profile, ++count)
        }
    }

    function createForm({ _id, username, email, age }, index) {
        const currentForm = profileFormCloning.cloneNode(true);

        const [radioLockInput, radioUnlockInput, usernameInput, emailInput, ageInput] = Array.from(currentForm.getElementsByTagName("input"));
        const hiddenFieldsContainer = currentForm.getElementsByTagName("div")[0];
        const btn = currentForm.getElementsByTagName("button")[0];
        btn.addEventListener("click", showHideHandler)

        hiddenFieldsContainer.id = `user${index}'HiddenFields'`;
        hiddenFieldsContainer.style.display = "none";
        hiddenFieldsContainer.className = "";
        // hiddenFieldsContainer.classList.add("user${index}Username");
        radioLockInput.name = `user${index}Locked`;
        radioUnlockInput.name = `user${index}Locked`;
        usernameInput.name = `user${index}Username`;
        usernameInput.value = username;
        emailInput.name = `user${index}Email`;
        emailInput.value = email;
        ageInput.name = `user${index}Age`;
        ageInput.value = age;
        ageInput.type = "email";//there is an error in the exersice

        main.appendChild(currentForm);
    }

    function showHideHandler(e) {
        const btn = e.currentTarget;
        const profileForm = btn.parentNode;
        const lockInput = profileForm.querySelector("input[type='radio'][value='lock']")
        if (lockInput.checked) {
            return;
        }

        const hiddenFieldsContainer = profileForm.getElementsByTagName("div")[0];

        if (btn.textContent === "Show more") {
            hiddenFieldsContainer.style.display = "block";
            btn.textContent = "Hide it"
        } else {
            hiddenFieldsContainer.style.display = "none";
            btn.textContent = "Show more"
        }

    }


}