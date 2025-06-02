let codigo = document.querySelector("#codigo");
let quantidade = document.querySelector("#quantidade");
let resultado = document.querySelector("#resultado");

function calcularValor() {
    let cod = Number(codigo.value);
    let qtd = Number(quantidade.value);
    let preco = 0;

    if (cod == 100) preco = 10;
    else if (cod == 101) preco = 12;
    else if (cod == 102) preco = 15;
    else if (cod == 103) preco = 12;
    else if (cod == 104) preco = 13;
    else if (cod == 105) preco = 5;
    else {
        resultado.value = "Código inválido";
        return;
    }

    let total = preco * qtd;
    resultado.value = `Total a pagar: R$${total.toFixed(2)}`;
}