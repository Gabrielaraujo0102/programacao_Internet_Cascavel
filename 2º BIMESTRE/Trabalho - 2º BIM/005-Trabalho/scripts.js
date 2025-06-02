let saldo = document.querySelector("#saldoMedio");
let resultado = document.querySelector("#resultado");

function calcularCredito() {
    let saldoMedio = Number(saldo.value);
    let credito = 0;

    if (saldoMedio > 400) {
        credito = saldoMedio * 0.30;
    } else if (saldoMedio > 300) {
        credito = saldoMedio * 0.25;
    } else if (saldoMedio > 200) {
        credito = saldoMedio * 0.20;
    } else {
        credito = saldoMedio * 0.10;
    }

    resultado.value = `Saldo Médio: R$${saldoMedio.toFixed(2)} - Crédito: R$${credito.toFixed(2)}`;
}