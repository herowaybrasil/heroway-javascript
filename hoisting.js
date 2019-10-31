console.log(superHero); // undefined, porém não deu erro;
var superHero = 'Spider Man';
console.log(superHero); // Spider man

// console.log(name); // erro: name is not defined; o programa quebra e para de executar!
// let name = 'Gabriel';

/* ----- */

console.log(helloWorld); // undefined, porém não deu erro;
function helloWorld() {
  console.log('hello world');
}

/* ----- */

{
  var a = 10;
  let b = 10;
}

console.log(a);
// console.log(b);

/* ----- */

/* num programa com varias variaveis globais esse comportamento pode se tornar caótico */

// https://youtu.be/XgSjoHgy3Rk?t=280
var superHero = 'spider-man';
let anotherName = 'Gabriel';
console.log(window.superHero);
console.log(window.name);

/* ----- */

// var x let
for (var i = 0; i < 100; i++) {
  setTimeout(() => console.log(i), 1);
}
console.log('fim do FOR');