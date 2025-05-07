    let valorPago = document.querySelector("#valorPago");
    let precoProduto = document.querySelector("#precoProduto");
    let btTroco = document.querySelector("#btTroco");
    let resultado = document.querySelector("#resultado");

function calcularTroco(){
    let valorPago = Number(valorPago.value);
    let precoProduto = Number(precoProduto.value);

    let valorFinal = valorPago - precoProduto
    resultado.textContent = valorFinal
}

btTroco.onclick = function(){
    calcularTroco();
}