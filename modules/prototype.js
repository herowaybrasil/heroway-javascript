console.clear();

console.log(typeof 'texto -> string'); // string;
console.log(typeof 200); // number;

console.log(typeof [1, 2, 3]); // object -> js é estranho;
console.log(typeof { herowayIsCool: true }); // object;

console.log('String', String.prototype);
console.log('Number', Number.prototype);
console.log('Array', Array.prototype);
console.log('Object', Object.prototype);

/* ----- */

const myString = 'heroway is rocks!';
console.log(myString.toUpperCase()); // String.prototype.toUpperCase

const myNumber = 200;
console.log(myNumber.toPrecision(5)); // Number.prototype.toPrecision

const myArray = [1, 2, 3, 'texto'];
myArray.push('outro texto'); // Array.prototype.push

const arrayFiltrado = myArray.filter((elemento, index) => { // Array.prototype.filter
 if (typeof elemento === 'number') {
   return true;
 }
  
  return false;
});

console.log(arrayFiltrado);

const myObject = { heroi: 'Batman' };
console.log(myObject.toString()); // Object.prototype.toString


/* ----- */

// NULL vs UNDEFINED
console.log(typeof null);
console.log(typeof undefined);

function sum(a = 1, b = 2) {
  return a + b;
}

console.log(sum(null, null));
console.log(sum(undefined, undefined));