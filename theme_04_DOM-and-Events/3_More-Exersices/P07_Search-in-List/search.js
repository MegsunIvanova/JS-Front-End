function search() {
   const townsLiArr = Array.from(document.getElementById("towns").children);
   const searchText = document.getElementById("searchText").value;
   const resultDiv = document.getElementById("result");

   let matches = 0;
   townsLiArr.forEach((li) => {
      if(li.textContent.includes(searchText)) {
            li.style.textDecoration = "underline";
            li.style.fontWeight = "bold";
            matches++;
      } else {
         li.style.textDecoration = "none";
         li.style.fontWeight = "regular";
      }
   });

   resultDiv.textContent = `${matches} matches found`;
   
}
