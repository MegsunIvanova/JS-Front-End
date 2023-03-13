function heroesInventory(input) {
    let heroes = [];

    for (const line of input) {
        let [hero, level, items] = line.split(" / ");
        level = Number(level);
        heroes.push({ hero, level, items });
    }

    let sortedHeroes = heroes.sort((h1, h2) => {
        return h1.level - h2.level;
    });

    for (const { hero, level, items } of sortedHeroes) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }
}

heroesInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]

);