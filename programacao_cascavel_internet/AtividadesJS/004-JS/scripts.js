function reajustarSaldo() {
    const saldoInput = document.getElementById('saldo');
    const saldo = parseFloat(saldoInput.value);
  
    if (isNaN(saldo)) {
      document.getElementById('resultado').innerText = "Por favor, insira um valor válido.";
      return;
    }
  
    const saldoReajustado = saldo * 1.01;
    document.getElementById('resultado').innerText =
      `Saldo com reajuste de 1%: R$ ${saldoReajustado.toFixed(2)}`;
  }