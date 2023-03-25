function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/messenger";
    const nameInput = document.querySelector("input[name='author']");
    const msgInput = document.querySelector("input[name='content']");
    const messagesTextArea = document.getElementById("messages");
    const btnSend = document.getElementById("submit");
    const btnRefresh = document.getElementById("refresh");

    btnSend.addEventListener("click", sendMessageHandler);
    btnRefresh.addEventListener("click", getAllMessagesHandler);

    async function sendMessageHandler() {

        try {
            const author = nameInput.value;
            const content = msgInput.value;
            console.log(nameInput);
            console.log(nameInput.value)

            let httpHeaders = {
                method: "POST",
                body: JSON.stringify({ author, content })
            }

            await fetch(URL, httpHeaders);

            nameInput.value = "";
            msgInput.value = "";
            getAllMessagesHandler()
        } catch (err) {
            console.log(err);
        }
    }

    async function getAllMessagesHandler() {
        try {
            messagesTextArea.value = "";
            const resp = await fetch(URL);
            const data = await resp.json();
            messagesTextArea.value = Object.values(data)
                .map(({ author, content }) => `${author}: ${content}`)
                .join("\n");

        } catch (err) {
            console.log(err);
        }

    }

}

attachEvents();