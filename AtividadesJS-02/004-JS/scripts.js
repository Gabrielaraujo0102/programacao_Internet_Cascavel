let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refri = document.querySelector("#refri");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular() {
    let sabores = [sabor1.value, sabor2.value, sabor3.value, sabor4.value];
    let qtdRefri = Number(refri.value);

    let total = (sabores.length * 12) + (qtdRefri * 7);

    resultado.innerHTML = 
        "Sabores escolhidos:<br>" +
        sabores.join("<br>") + "<br>" +
        "Total a pagar: R$ " + total.toFixed(2);
}

btCalcular.onclick = function(){
    calcular();
}