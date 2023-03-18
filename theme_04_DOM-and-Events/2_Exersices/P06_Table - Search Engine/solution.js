function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchInput = document.getElementById("searchField");
      const tableRows = Array.from(document.querySelectorAll("tbody tr"));

      let searchedWord = searchInput.value;

      //Clear Prev matches and Select new matches
      tableRows.forEach((row) => {
         let trimmedTexContent = row.textContent.trim();

         if (row.classList.contains("select")) {
            row.classList.remove("select");
         }

         if (trimmedTexContent.includes(searchedWord)) {
            row.classList.add("select");
         }

      });

      //Clear searchField value
      searchInput.value = "";

   }
}