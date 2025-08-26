// Exercício

const readlineSync = require('readline-sync');

multiplicacao = 0;
soma = 0;
let numeroA = parseInt(readlineSync.question("Digitte um numero:"));
let numeroB = parseInt(readlineSync.question("Digitte um numero:"));
let numeroC = parseInt(readlineSync.question("Digitte um numero:"));

if (numeroA + numeroB < numeroC) {
    soma = numeroA + numeroB;
    console.log(`${numeroA} + ${numeroB} é menor que ${numeroC}`);
} 
if (numeroA + numeroB > numeroC) {
    soma = numeroA + numeroB;
    console.log(`${numeroA} + ${numeroB} é maior que ${numeroC}`);
}