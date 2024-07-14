function contar() {
    let valorInicial = document.getElementById("valorInicial");
    let valorFinal = document.getElementById("valorFinal");
    let valorPasso = document.getElementById("valorPasso");
    let resultado = document.getElementById("resultado");

    if (isNaN(valorInicial) || isNaN(valorFinal) || isNaN(valorPasso)) {
        resultado.innerHTML = "Digite somente números!";
    }
}

var botao = document.getElementById("botaoContar");
botao.addEventListener("click", contar);