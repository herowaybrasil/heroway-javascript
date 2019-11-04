function sum(a, b) {
    return a + b;
  }
  
  var resultSum = sum(10, 20);
  console.log(resultSum);
  
  /* ----- */
  
  // EXEMPLO 1
  function sum2(a) {
    return function sumAgain(b) {
      return a + b;
    }
  }
  
  var sumAgain = sum2(10);
  console.log(sumAgain);
  
  var result2 = sumAgain(20);
  console.log(result2);
  
  /* ----- */
  
  // EXEMPLO 2
  function iniciar(number) {
    var contador = number || 0; // fazer exemplo de var global e chamar 2 instancias
  
    return function add(number) {
      return contador + (number || 1);
    }
  }
  
  var contador = iniciar(10);
  console.log(contador);
  
  var plus10 = contador(10);
  console.log(plus10);
  
  /* ----- */
  
  // EXEMPLO 3 / metodos privados
  function counter() {
      let a = 0;
  
      return {
          inc: function() { ++a; },
          dec: function() { --a; },
          get: function() { return a; },
          reset: function() { a = 0; }
      }
  }
  
  /* ----- */
  
  // EXEMPLO 4 - COMPLEXO!
  
  const filter = (items, fn) => {
  
    let finalResult = [];
    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i];
      const result = fn(currentItem, i);
  
      if (result) {  
        finalResult.push(currentItem);
      }
    }
    
    return finalResult;
  }
  
  const result = filter([1, 2, 3, 4, 5], (item, index) => {
    if (item % 2 === 0) {
     return true; 
    }
  
    return false;
  });
  
  console.log(result);
  
  // SET INTERVAL / ARRAY.MAP || ARRAY.FILTER, ETC