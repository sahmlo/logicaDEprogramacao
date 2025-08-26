// Exercício

const readlineSync = require('readline-sync');
soma = 0
let nota =0

for (let i=1; i <= 2; i++)  {
    do {
        nota = readlineSync.questionFloat('Digite um número: ');
    } while (nota > 10 || nota > 10);
    soma+=nota
}

media = soma / 2
console.log(`Média: ${media}`)