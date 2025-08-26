// Criando uma lista.

const numeros = [1, 2, 3, 4, 5];

console.log('Exibindo elementos da lista:')
console.log(numeros)

console.log('\nMultiplicação com todos os elementos da lista:')
const dobrados = numeros.map(n => n * 2)
console.log(dobrados)

console.log('\nFiltrando números pares:')
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)

console.log('\nSomando todos os números do vetor:')
const total = numeros.reduce((soma, atual) => soma + atual, 0)
console.log(total)