function regularFunction() {
    console.log('regular function');
  };
  
  /* BOA PRÁTICA: Utilizar arrow function
   *(a não ser em alguns casos especificos que não vamos citar agora)
  **/
  const arrowFunction = () => {
    console.log('arrow function');
  };
  
  regularFunction();
  arrowFunction();
  
  /* ----- */
  
  function executador(fn) {
    console.log('executador, executando função:', fn.name);
    return fn();
  }
  
  function pegarNumeroDez() {
    return 10;
  }
  
  console.log(executador(pegarNumeroDez));
  
  /* ----- */
  
  const empresa = {
    nome: 'Heroway',
    objetivo: 'Ajudar as pessoas a conseguirem seu primeiro emprego',
    apresentacao: () => {
      console.log(`Olá, somos a ${this.nome} e nosso objetivo é ${this.objetivo}`);
    }
  }
  
  console.log(empresa.apresentacao);
  console.log(empresa.apresentacao());