// Exercício
console.clear()

const readlineSync = require('readline-sync');

let numero = parseInt(readlineSync.question("Digite um numero: "));

if (numero == 0) {
    console.log(`${numero} é neutro.`)    
} else if (numero > 0) {
    console.log(`${numero} é positivo.`)
} else {
    console.log(`${numero} é negativo.`)
}