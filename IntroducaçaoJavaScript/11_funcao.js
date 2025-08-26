// Função

function somar (a,b) {
    return a + b
}

function subtrair (a,b) {
    return a - b
}

function multiplicar (a,b) {
    return a * b
}

function dividir (a,b) {
    return a / b
}

// Chamando a função
// Adicionando o resultado da função na constante.
const soma = somar (2,3)
const subtracao = subtrair (2,3)
const multiplicao = multiplicar (2,3)
const divisao = dividir (2,3)

// Mostra o conteúdo da constante
console.log(`Soma: ${soma}`)
console.log(`Subtraçao: ${subtracao}`)
console.log(`Multiplicaçao: ${multiplicao}`)
console.log(`Divisao: ${divisao}`)