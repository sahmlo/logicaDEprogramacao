// Limpar o terminal.
console.clear()
const readline = require('readline-sync');

let livros = [];

// Função para exibir o menu principal e do escolha do usuário.
function exibirMenu() {
    console.log("\n MENU DA BIBLIOTECA ");
    console.log("1. Adicionar Livro");
    console.log("2. Listar Livros");
    console.log("3. Buscar Livro por Título");
    console.log("4. Emprestar Livro");
    console.log("5. Devolver Livro");
    console.log("6. Sair");
    return readline.question("Escolha uma opção: ");
}

// 1. Adicionar Livro
function adicionarLivro() {
    console.log("\n ADICIONAR LIVRO ");
    const titulo = readline.question("Digite o titulo do livro: ");
    const autor = readline.question("Digite o autor do livro: ");
    const isbn = readline.question("Digite o ISBN (Número Padrão Internacional de Livros) do livro: ");

    // Verifica se já existe um livro com o mesmo ISBN
    if (livros.some(livro => livro.isbn === isbn)) {
        console.log("ERRO: Já existe um livro com este ISBN!");
        return;
    }

    livros.push({
        titulo: titulo,
        autor: autor,
        isbn: isbn,
        emprestado: false // O livro não está emprestado
    });
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
    readline.question("\nPressione Enter para continuar."); // Esperando a resposta do usuario
}

// 2. Listar Livros
function listarLivros() {
    console.log("\n LIVROS NA BIBLIOTECA");
    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado na biblioteca.");
        readline.question("\nPressione Enter para continuar.");
        return;
    }

    livros.forEach((livro, index) => {
        console.log(`${index + 1}. Título: "${livro.titulo}"`);
        console.log(`   Autor: ${livro.autor}`);
        console.log(`   ISBN: ${livro.isbn}`);
        console.log(`   Status: ${livro.emprestado ? "Emprestado" : "Disponível"}`);
        console.log("---------------------------");
    });
    readline.question("\nPressione Enter para continuar.");
}

// 3. Buscar Livro por Título
function buscarLivro() {
    console.log("\n BUSCAR LIVRO");
    const termoBusca = readline.question("Digite o titulo (ou parte dele) do livro que deseja buscar: ");
    const resultados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) // O comando "toLowerCase()" é semlhante ao "lower" do py. E o ".includes" vai buscar os titulos adicionado.
     );

    if (resultados.length === 0) {
        console.log(`Nenhum livro encontrado com "${termoBusca}".`);
        readline.question("Pressione Enter para continuar.");
        return;
    }

    console.log(`\n RESULTADOS DA BUSCA por "${termoBusca}"`);
    resultados.forEach((livro, index) => {
        console.log(`${index + 1}. Título: "${livro.titulo}"`);
        console.log(`   Autor: ${livro.autor}`);
        console.log(`   ISBN: ${livro.isbn}`);
        console.log(`   Status: ${livro.emprestado ? "Emprestado" : "Disponível"}`);
        console.log("---------------------------");
    });
    readline.question("Pressione Enter para continuar.");
}

// 4. Emprestar Livro
function emprestarLivro() {
    console.log("\n EMPRESTAR LIVRO");
    const isbnEmprestimo = readline.question("Digite o ISBN (Número Padrão Internacional de Livros) do livro que deseja emprestar: ");
    const livro = livros.find(livro => livro.isbn === isbnEmprestimo);

    if (!livro) {
        console.log("ERRO: Livro nao encontrado com o ISBN fornecido.");
        readline.question("Pressione Enter para continuar.");
        return;
    }

    if (livro.emprestado) {
        console.log(`AVISO: O livro "${livro.titulo}" ja esta emprestado.`);
        readline.question("Pressione Enter para continuar.");
        return;
    }

    livro.emprestado = true;
    console.log(`Livro "${livro.titulo}" emprestado com sucesso!`);
    readline.question("Pressione Enter para continuar.");
}

// 5. Devolver Livro
function devolverLivro() {
    console.log("\n DEVOLVER LIVRO");
    const isbnDevolucao = readline.question("Digite o ISBN (Número Padrão Internacional de Livros) do livro que deseja devolver: ");
    const livro = livros.find(livro => livro.isbn === isbnDevolucao);

    if (!livro) {
        console.log("ERRO: Livro nao encontrado com o ISBN fornecido.");
        readline.question("Pressione Enter para continuar.");
        return;
    }

    if (!livro.emprestado) {
        console.log(`AVISO: O livro "${livro.titulo}" nao esta emprestado.`);
        readline.question("Pressione Enter para continuar.");
        return;
    }

    livro.emprestado = false;
    console.log(`Livro "${livro.titulo}" devolvido com sucesso!`);
    readline.question("Pressione Enter para continuar.");
}

// Menu Principal do Programa
function iniciarBiblioteca() {
    let opcao;
    do {
        opcao = exibirMenu();
        switch (opcao) {
            case '1':
                adicionarLivro();
                break;
            case '2':
                listarLivros();
                break;
            case '3':
                buscarLivro();
                break;
            case '4':
                emprestarLivro();
                break;
            case '5':
                devolverLivro();
                break;
            case '6':
                console.log("Saindo do sistema da biblioteca. Ate mais!");
                break;
            default:
                console.log("Opcao invalida. Por favor, escolha uma opcao de 1 a 6.");
                readline.question("Pressione Enter para continuar.");
        }
    } while (opcao !== '6');
}

// Inicia o sistema da biblioteca
iniciarBiblioteca();