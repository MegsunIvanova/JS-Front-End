function encodeAndDecodeMessages() {
    const [sendBtn, receiveBtn] = Array.from(document.getElementsByTagName("button"));
    const [writeTextArea, readTextArea] = Array.from(document.getElementsByTagName("textarea"));

    sendBtn.addEventListener("click", encodingHandler);
    receiveBtn.addEventListener("click", decodingHandler);

    function encodingHandler() {
        const msg = writeTextArea.value;
        let codes = [...msg].map((symbol) => symbol.charCodeAt(0) + 1);
        readTextArea.value = String.fromCharCode(...codes);
        writeTextArea.value = "";
    }

    function decodingHandler() {
        const decodedMsg = readTextArea.value;
        let codes = [...decodedMsg].map((symbol) => symbol.charCodeAt(0) - 1);
        readTextArea.value = String.fromCharCode(...codes);
    }
}