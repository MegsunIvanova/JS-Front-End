function toggle() {
    const btn = document.getElementsByClassName("button")[0];
    const extraText = document.getElementById("extra");

    if (btn.textContent === "More") {
        btn.textContent = "Less";
        extraText.style.display = "block";
    } else {
        btn.textContent = "More";
        extraText.style.display = "none";
    }
}