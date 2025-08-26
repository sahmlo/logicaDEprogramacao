// Objetos 

const usuarios = [
    {nome: 'Ana', idade: 25},
    {nome: 'Marta', idade: 32},
    {nome: 'Maria', idade: 26},
]

console.log('\nExibindo todos elemento do vetor.')
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log('\nFiltrando usuários.')
console.log('Apenas usuários ate 30 anos.\n')
const menorQueTrintaAnos = usuarios.filter(usuario => usuario.idade <= 30)
menorQueTrintaAnos.forEach(usuario => console.log(`${usuario.nome} tem ${usuario.idade}`))

console.log('\nExibindo apenas o nome dos usuários.\n')
const nomes = usuarios.map(usuario => usuario.nome)
nomes.forEach( nome => {
    console.log(`Nome: ${nome}`)
})

console.log('\nExibindo o nome do usuários com numeração.\n')
nomes.forEach( (nome, index) => {
    console.log(`${++index}: ${nome}`)
})

console.log('\nEncontrar um usuário.')
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Marta')
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

console.log('\nMostra a soma de todas as idades.')
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Total: ${somaIdades}`)