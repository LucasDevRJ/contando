function contar() {
    let valorInicial = document.getElementById("valorInicial").value;
    let valorFinal = document.getElementById("valorFinal").value;
    let valorPasso = document.getElementById("valorPasso").value;
    let resultado = document.getElementById("resultado");

    valorInicial = parseInt(valorInicial);
    valorFinal = parseInt(valorFinal);
    valorPasso = parseInt(valorPasso);

    if (isNaN(valorInicial) || isNaN(valorFinal) || isNaN(valorPasso)) {
        resultado.innerHTML = "Digite somente números!";
    } else if (valorInicial < 0 || valorFinal < 0 || valorPasso < 0) {
        resultado.innerHTML = "Digite valores maiores que 0!";
    } else {
        resultado.innerHTML = "";
        if (valorInicial > valorFinal) {
            let troca = valorInicial;
            valorInicial = valorFinal;
            valorFinal = troca;
        }

        while (valorInicial <= valorFinal) {
            let emoji = valorInicial < valorFinal ? "\u27A1\uFE0F" : "\uD83C\uDFC6";
            resultado.innerHTML += `${valorInicial} ${emoji}`;
            valorInicial += valorPasso;
        }
    }
}

var botao = document.getElementById("botaoContar");
botao.addEventListener("click", contar);