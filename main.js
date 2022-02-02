let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = 400;
    let cerveja = 1200;
    let refwater = 1000;

    if(duracao >= 6) {
        carne = 650;
        cerveja = 2000;
        refwater = 1500;
    }
  
    let qtdTotalCarne = carne * adultos + (carne / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalRefWater = refwater * adultos + (refwater / 2 * criancas);

    resultado.innerHTML = `<p class="carne" ><img src="imagens/carne.svg">${qtdTotalCarne / 1000 } Kg de carne</p>`;
    resultado.innerHTML += `<p class="cerveja" ><img src="imagens/cerv.svg">${qtdTotalCerveja /1000} L de cerveja</p>`;
    resultado.innerHTML += `<p class="refri" ><img src="imagens/refri.svg">${qtdTotalRefWater /1000} L de bebida</p>`;


}