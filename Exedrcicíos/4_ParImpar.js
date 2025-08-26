// Exercicíos
// npm install readline-sync (Para aparecer no terminal.)

const readlineSync = require('readline-sync');
par = 0
impar = 0

let numero = readlineSync.questionInt('Digite um numero: ');

if (numero == 0) {
    console.log(`Esse numero é neutro.`)    
} else if (numero % 2 == 0) {
    console.log(`Seu numero é par.`)
} else {
    console.log(`Seu numero é impar.`)
}