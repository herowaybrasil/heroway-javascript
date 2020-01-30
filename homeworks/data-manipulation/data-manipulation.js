// Faça uma chamada HTTP para o seguinte endpoint:
//  https://akabab.github.io/superhero-api/api/all.json

// Filtre apenas os heróis com a primeira letra do seu nome.
// Com o resultado da operação anterior, mapeie apenas os heróis que pertencem a DC.
// Percorra todos os heróis da lista adicionando uma nota aleatória para cada um deles.
// Conte quantos heróis da Marvel e da DC existem na lista.

async function run() {
    const xhr = await fetch('https://akabab.github.io/superhero-api/api/all.json');
    const heroes = await xhr.json();

    const heroesWithG = heroes.filter((hero) => hero.name.charAt(0).toLowerCase() === 'g');
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