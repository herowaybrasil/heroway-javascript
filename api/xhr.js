function getHeroes() {
    console.log('INICIO - GET HEROES');
  
    fetch('https://www.heroway.com.br/api/heroes.json')
      .then((xhr) => xhr.json()) // converte resposta do servidor para formato JSON
      .then((heroes) => console.log('heroes encontrados', heroes)) // exibe dados em JSON
      .then((error) => console.log('ocorreu um erro', error)); // exibe erro caso ocorra algum problema
  
    console.log('FIM - GET HEROES');
  }
  
  // getHeroes();
  
  /* ----- */
  
  async function getHeroesWithAsyncAwait() {
    console.log('INICIO - GET HEROES WITH ASYNC AWAIT');
  
    try {
      const xhr = await fetch('https://www.heroway.com.br/api/heroes.json');
      const heroes = await xhr.json();
  
      console.log('heroes encontrados', heroes);
    } catch(error) {
      console.log('ocorreu um erro', error);
    }
  
    console.log('FIM - GET HEROES WITH ASYNC AWAIT');
  }
  
  console.log('ANTES - GET HEROES WITH ASYNC AWAIT');
  getHeroesWithAsyncAwait(); // simula sincrono, porém é assincrono
  console.log('DEPOIS - GET HEROES WITH ASYNC AWAIT');