/* primitivos */

/* BOA PRÁTICA: começar uma string com aspas simples */
var string = 'string' || "string";
var number = 999;
var boolean = true || false;

/* não primitivos */
// var array = new Array(); || var array = [];
var array = [1, 'text', 3, true, { company: 'Heroway' }, [1, 3, 5]];
console.log(array.length);

array.push(true);
console.log(array);
/* em Javascript uma lista (array) aloca memória dinamicamente e não garante tipagem do item adicionado */

// var object = new Object() || var object = {};
var heroi = {
  nome: 'Homem de Ferro',
  'alter-ego': true, // é o heroi, porém o vilão criador de armas

  dispararLaser: function() {
    console.log('BEAM!');
    
    const acertou = Math.random() > 0.50 ? 'SIM' : 'NÃO';
    return `acertou o alvo? ${acertou}`;
  }
};

/* ----- */

function helloWorld() {
  console.log('hello world');
}

var helloWorldAgain = function() {
  console.log('hello world again');
}

helloWorld();
helloWorldAgain();

/* ----- */

var a = 10;
var b = '10';
// var b = 10;

if (a == b) {
  console.log('valores iguais, independente do tipo');
}

if (a === b) {
  console.log('valores e tipos iguais');
}

var c = 10;
var d = 10;

console.log(c === d); // true, primitivo; O mesmo se aplica a a string e booleans, porém, arrays e objetos não!!!!!!!!

// if
// for
// while
// switch case

