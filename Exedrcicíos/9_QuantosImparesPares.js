// Exercício
console.clear()

const readline = require('readline-sync');

const Pares = [];
const Impares = [];
numeros = [];

for (let i = 1; i <= 6; i++) {
  numeros = readline.questionInt(`Digite o ${i} numero: `);
  
  if (numeros % 2 == 0) {
    Pares.push(numeros)
  } else {
  Impares.push(numeros)  
}
}

console.log(`Quantidades de numeros Pares: ${Pares.length}`)
console.log(`Quantidades de numeros Impares: ${Impares.length}`)