// Exercício
console.clear()
const readline = require('readline-sync');

positivos = [];
negativos = [];
numeros = [];
soma = 0

for (let i = 1; i <= 5; i++) {
  numeros = readline.questionInt(`Digite o ${i} numero: `);
  if (numeros > 0) {
    soma+=numeros
    positivos.push(numeros)
  } else {
  negativos.push(numeros)  
}}

console.log(`\nQuantidades de numeros positivos: ${positivos.length}`)
console.log(`\nQuantidades de numeros negativos: ${negativos.length}`)
console.log(`\nSoma dos numeros positivos: ${soma}`)