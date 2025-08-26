// Exercício

const readlineSync = require('readline-sync');

let dia = parseInt(readlineSync.question("Digite um numero de 1 à 7: "));

switch (dia) {
    case 1: 
        console.log(`Hoje é domingo, final de semana.`)
        break
    case 2:
        console.log(`Hoje é segunda, dia util.`)
        break
    case 3:
        console.log(`Hoje é terça, dia util.`)
        break
    case 4:
        console.log(`Hoje é quarta, dia util.`)
        break
    case 5:
        console.log(`Hoje é quinta, dia util.`)
        break
    case 6:
        console.log(`Hoje é sexta, dia util.`)
        break
    case 7:
        console.log(`Hoje é sabado, final de semana.`)
        break
    default:
        console.log(`Opção inválida`)
        break
}