const button = document.getElementsByTagName("button")[0];
const result = document.getElementById("result");
button.addEventListener("click", toggle);

result.classList.add("text", "typography");//add new class/es to element

function toggle() {
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
    }
}