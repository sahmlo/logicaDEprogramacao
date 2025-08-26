// Exercicíos
// npm install readline-sync (Para aparecer no terminal.)

const readlineSync = require('readline-sync');
soma = 0;
multiplicacao = 0;

let numero1 = readlineSync.questionInt('Digite um numero: ');
let numero2 = readlineSync.questionInt('Digite um numero: ');

if (numero1 == numero2) {
    soma = numero1 + numero2
    console.log(`A soma dos números é ${soma}`)
} else if (numero1 != numero2) {
    multiplicacao = numero1 * numero2
    console.log(`A multiplicação dos números é ${multiplicacao}`)    
}