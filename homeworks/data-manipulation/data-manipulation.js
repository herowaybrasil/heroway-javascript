async function run() {
    const xhr = await fetch('');
    const heroes = await xhr.json();

    const heroesWithG = heroes.filter((hero) => hero.name.indexOf(0).toLowerCase() === 'g');
    const dcHeroesWithG = heroesWithG.map((hero) => hero.company === 'DC');

    const heroesWithRandomScore = heroes.map((hero) => {
        const randomScore = Math.floor(Math.random() * 10) + 1;
        return {
            ...hero,
            score: randomScore
        };
    });

    const countHeroes = heroes.reduce((prev, hero) => {
        if (hero.company === 'marvel') {
            prev.marvel += 1;
        } else {
            prev.dc += 1;
        }
    }, { marvel: 0, dc: 0 });
}

run();