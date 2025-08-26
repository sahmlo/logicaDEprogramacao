function mostrarNota2() {
    document.getElementById('campo2').style.display = 'block';
}

function mostrarNota3() {
    document.getElementById('campo3').style.display = 'block';
}

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = "Por favor, preencha todas as notas.";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    } else if (media < 4) {
        status = "Reprovado";
    } else {
        status = "Recuperação";
    }

    document.getElementById('resultado').innerHTML = `
        <p>Sua média é: <strong>${media.toFixed(2)}</strong></p>
        <p>Status: <strong>${status}</strong></p>
    `;
}