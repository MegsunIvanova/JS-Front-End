function moviesParser(input) {
    let moviesCollection = {};
    for (const line of input) {
        if (line.startsWith("addMovie ")) {
            let name = line.substring("addMovie ".length);
            let movie = { name, };
            moviesCollection[name] = movie;
        } else if (line.search(" directedBy ") !== -1) {
            let movieName = line.substring(0, line.indexOf(" directedBy "));
            let director = line.substring(line.indexOf(" directedBy ") + " directedBy ".length);
            if (moviesCollection.hasOwnProperty(movieName)) {
                moviesCollection[movieName].director = director;
            }
        } else if (line.search(" onDate ") !== -1) {
            let movieName = line.substring(0, line.indexOf(" onDate "));
            let date = line.substring(line.indexOf(" onDate ") + " onDate ".length);
            if (moviesCollection.hasOwnProperty(movieName)) {
                moviesCollection[movieName].date = date;
            }
        }
    }

    for (const key in moviesCollection) {
        let movie = moviesCollection[key];
        if (Object.keys(movie).length === 3) {
            console.log(JSON.stringify(movie));
        }
    }
}

moviesParser(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]

);