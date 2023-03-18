function create(words) {
   const content = document.getElementById("content");
   const newDiv = document.createElement("div");

   words.forEach((word) => {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.textContent = word;
      newParagraph.style.display = "none";

      newDiv.appendChild(newParagraph);
      newDiv.addEventListener("click", clickHandler);
      content.appendChild(newDiv);

   });

   function clickHandler(e) {
      const divParagraph = e.currentTarget.children[0];
      divParagraph.style.display = "block";
   }

}