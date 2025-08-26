// Exercício
console.clear()

const readline = require('readline-sync');

const listaDeNotas = [];

for (let i = 1; i <= 3; i++) {
  let nota = readline.questionFloat(`Digite sua nota: `);
  listaDeNotas.push(nota);
}

console.log('\nSoma das notas: ');
const soma = listaDeNotas.reduce((soma, total) => soma + total, 0);
console.log(soma);

console.log('\nQuantidade de notas: ');
const quantidadeNotas = listaDeNotas.length;
console.log(quantidadeNotas);

console.log('\nMédia: ');
const media = soma / quantidadeNotas;
console.log(media);

console.log('\nExibindo todas as notas: ');
listaDeNotas.forEach((nota, index) => console.log(`${++index}a nota: ${nota}`));