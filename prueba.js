//1. Emparejamiento correcto
//Hacer una función que tenga como entrada un string formado por (), [] y {} y que indique que los pares correspondientes son correctos.
//Es decir que haya una correcta apertura y cierre de los signos de acotación
//Ej,  entrada: "[()]{}{[()()]()}". retorno true
//Ej,  entrada: "[(])". retorno false
function correctPairing(str) {}

console.log({
  output: correctPairing('[()]{}{[()()]()}'),
  expected: true,
  valid: correctPairing('[()]{}{[()()]()}') === true,
});

//2. Serie de Fibonacci
//Hacer una función que reciba como entrada el enésimo término para generar la secuencia de Fibonacci, y retorne la suma de los valores
// En matemática, la sucesión o serie de Fibonacci es la siguiente sucesión infinita de números naturales:
//  0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597
// La sucesión comienza con los números 0 y 1; a partir de estos, «cada término es la suma de los dos anteriores», es la relación de recurrencia que la define.
//Ej. fibonacci(7); // 33 (0+1+1+2+3+5+8+13);
function fibonacci(n) {
    let arreglo = [0,1];
    for (let i =2; i<=n; i++)
    {
    arreglo[i] = arreglo[i - 1] + arreglo[i - 2];
    }
    return arreglo.slice( 0, n)
}


console.log({
  output: fibonacci(7)
});

//3. Número Armstrong
//Hacer una función que valide si un número es un número Armstrong. Deber retornar falso o verdadero
//Un Número Armstrong es un número que es igual a la suma de la N-enésima potencia de los dígitos, donde n es el número de dígitos del número.
//Por ejemplo, 153 tiene 3 dígitos y 153 = 1^3 + 5^3 + 3^3, por lo tanto 153, es un número de Armstrong.
function armstrong(n) {}

console.log({
  output: armstrong(153),
  expected: true,
  valid: armstrong(153) === true,
});
