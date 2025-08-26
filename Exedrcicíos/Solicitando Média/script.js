let notas = [];

function mostrarNota2() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    if (isNaN(nota1)) {
        alert("Por favor, insira a Nota 1.");
        return;
    }
    notas.push(nota1);
    document.getElementById('campo1').style.display = 'none';
    document.getElementById('campo2').style.display = 'block';
}

function mostrarNota3() {
    let nota2 = parseFloat(document.getElementById('nota2').value);
    
    if (isNaN(nota2)) {
        alert("Por favor, insira a Nota 2.");
        return;
    }
    
    notas.push(nota2);
    document.getElementById('campo2').style.display = 'none';
    document.getElementById('campo3').style.display = 'block';
}

function mostrarNota4() {
    let nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (isNaN(nota3)) {
        alert("Por favor, insira a Nota 3.");
        return;
    }
    notas.push(nota3);
    document.getElementById('campo3').style.display = 'none';
    document.getElementById('campo4').style.display = 'block';
}

function calcularMedia() {
    let nota4 = parseFloat(document.getElementById('nota4').value);
    if (isNaN(nota4)) {
        alert("Por favor, insira a Nota 4.");
        return;
    }
    notas.push(nota4);

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `A média das notas é: ${media.toFixed(2)}`;
}