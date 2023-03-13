function bookShelf(input) {
    let shelfIdGenreMap = {};
    let shelfGenreBookMap = {};

    for (const line of input) {
        if (line.includes(" -> ")) {
            let [shelfId, genre] = line.split(" -> ");
            if (!shelfIdGenreMap.hasOwnProperty(shelfId)) {
                shelfIdGenreMap[shelfId] = genre;
                shelfGenreBookMap[genre] = [];
            }
        } else {
            let [bookTitle, other] = line.split(": ");
            let [bookAuthor, bookGenre] = other.split(", ");
            if (shelfGenreBookMap.hasOwnProperty(bookGenre)) {
                shelfGenreBookMap[bookGenre].push({ bookTitle, bookAuthor });
            }
        }
    }

    let sortedGenres = Object.entries(shelfGenreBookMap)
        .sort((shelfA, shelfB) => {
            let booksACount = shelfA[1].length;
            let booksBCount = shelfB[1].length;

            return booksBCount - booksACount;
        });

    for (const [genre, books] of sortedGenres) {
        let shelfId = Object.entries(shelfIdGenreMap)
            .find(([id, g]) => g === genre)[0];

        console.log(`${shelfId} ${genre}: ${books.length}`);

        let sortedBooks = books.sort((bookA, bookB) => bookA.bookTitle.localeCompare(bookB.bookTitle));
        for (const book of sortedBooks) {
            console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
        }
    }
}

bookShelf(
    ['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']
);