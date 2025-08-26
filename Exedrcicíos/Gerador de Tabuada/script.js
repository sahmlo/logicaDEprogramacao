function gerarTabuada() {
  // Pegar o valor do input do HTML
  const numeroInput = document.getElementById('numeroInput');
  let numero = parseInt(numeroInput.value);

  // Mostra o resultado onde a tabela deve ser exibida
  const resultadoDiv = document.getElementById('resultadoTabuada');
  resultadoDiv.innerHTML = '';

  // Adiciona um título para tabuada
  resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}</h2>`;

  // Laço de repetição para gerar a tabuada
  for (let i = 1; i <= 30; i++) {
      let resultado = numero * i;
      // Adicionar cada linha da tabuada com um parágrafo
      resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
  }
}

// A função gerarTabuada será executada quando clicar no botão
const gerarBotao = document.getElementById('gerarBotao');
gerarBotao.addEventListener('click', gerarTabuada);