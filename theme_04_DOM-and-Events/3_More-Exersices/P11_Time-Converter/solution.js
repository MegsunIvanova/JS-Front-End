function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll("div input[type ='button']"));
    buttons.forEach(btn => btn.addEventListener("click", convertHandler));
    const inputsData = Array.from(document.querySelectorAll("div input[type ='text']"));

    function convertHandler(e) {
        const clickedBtn = e.currentTarget;
        let index = buttons.indexOf(clickedBtn);
        let data = Number(inputsData[index].value);

        let i = (index + 1) % inputsData.length;
        while (i !== index) {
            const currentInput = inputsData[i];
            if (i === 0) {
                data /= 86400;
            } else if (i === 1) {
                data *= 24;
            } else if (i === 2 || i === 3) {
                data *= 60;
            }

            currentInput.value = data;
            i = (++i) % inputsData.length;
        }

    }

}