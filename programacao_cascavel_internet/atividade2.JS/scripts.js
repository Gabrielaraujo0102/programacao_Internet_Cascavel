    let valorPago = parseFloat(document.getElementById('valorPago').value);
    let precoProduto = parseFloat(document.getElementById('precoProduto').value);
    let resultado = document.getElementById('resultado');

function calcularTroco() {
    if (isNaN(valorPago) || isNaN(precoProduto)) {
        resultado.innerText = "Por favor, insira valores válidos.";
        return;
    }

    const troco = valorPago - precoProduto;

    if (troco < 0) {
        resultado.innerText = `Valor insuficiente. Faltam R$ ${(troco * -1).toFixed(2)}.`;
    } else {
        resultado.innerText = `Troco a ser dado: R$ ${troco.toFixed(2)}`;
    }
}