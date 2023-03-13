function songList(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let allSongs = [];
    let numberOfSongs = input[0];
    for (let i = 1; i <= numberOfSongs; i++) {
        let [typeList, name, time] = input[i].split("_");
        let song = new Song(typeList, name, time);
        allSongs.push(song);
    }

    let fromList = input[input.length - 1];

    if (fromList === "all") {
        allSongs.forEach((s) => console.log(s.name));
    } else {
        allSongs.filter((s) => s.typeList === fromList)
            .forEach((s) => console.log(s.name));
    }
}

// songList(
//     [3,
//         'favourite_DownTown_3:14',
//         'favourite_Kiss_4:16',
//         'favourite_Smooth Criminal_4:01',
//         'favourite']

// );

// songList(
//     [4,
//         'favourite_DownTown_3:14',
//         'listenLater_Andalouse_3:24',
//         'favourite_In To The Night_3:58',
//         'favourite_Live It Up_3:48',
//         'listenLater']
// );

songList(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        
);