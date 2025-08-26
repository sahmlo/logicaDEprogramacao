document.getElementById("gerarContagem").addEventListener("click", function() {
    const inputNumero = document.getElementById("numeroInput").value;
    const numero = parseInt(inputNumero);
    const resultadoDiv = document.getElementById("resultadoContagem");

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número válido maior que zero!");
        return;
    }

    
    resultadoDiv.innerHTML = "";

    
    this.disabled = true;

    function contar(num) {
        if (num >= 0) {
            resultadoDiv.innerHTML = `<span>${num}</span>`;
            setTimeout(() => contar(num - 1), 1000);
        } else {
            document.getElementById("gerarContagem").disabled = false;
        }
    }

    contar(numero);
});