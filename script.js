var valor = window.document.getElementById('inputValor');
var botaoEuro = window.document.getElementById('botaoEuro');
var boatoDolar = window.document.getElementById('botaoDolar');
var botaoLibra = window.document.getElementById('botaoLibra');
var textoResposta = window.document.getElementById('textoResposta');

valor.addEventListener('mouseenter', aumentaTamanho);
valor.addEventListener('mouseout', diminuiTamanho);

botaoEuro.addEventListener('click', converteParaEuro);
botaoEuro.addEventListener('mouseenter', mudaCorEuro);
botaoEuro.addEventListener('mouseout', restauraCorEuro);

botaoLibra.addEventListener('click', converteParaLibra);
botaoLibra.addEventListener('mouseenter', mudaCorLibra);
botaoLibra.addEventListener('mouseout', restauraCorLibra);

boatoDolar.addEventListener('click', converteParaDolar);
botaoDolar.addEventListener('mouseenter', mudaCorDolar);
botaoDolar.addEventListener('mouseout', restauraCorDolar);

//Funções de Converter o valor
function converteParaEuro(event) {
    botaoEuro.style.background = 'green';
    var valorDigitado = valor.value;
    var taxaDeCambio = 0.19;
    var valorEmEuro = valorDigitado / taxaDeCambio;

    textoResposta.innerHTML = `\u20AC${valorEmEuro.toFixed(2)}`;
}

function converteParaLibra(event) {
    botaoLibra.style.background = 'green';
    var valorDigitado = valor.value;
    var taxaDeCambio = 0.16354;
    var valorEmLibra = valorDigitado / taxaDeCambio;

    textoResposta.innerHTML = `\u00A3${valorEmLibra.toFixed(2)}`;
}

function converteParaDolar(event) {
    botaoDolar.style.background = 'green';
    var valorDigitado = valor.value;
    var taxaDeCambio = 0.20381;
    var valorEmDolar = valorDigitado / taxaDeCambio;

    textoResposta.innerHTML = `\u0024${valorEmDolar.toFixed(2)}`;
}

//Função de aumentar e diminuir tamanho do input
function aumentaTamanho(event) {
    valor.style.transition = 'transform 0.2s';
    valor.style.transform = 'scale(1.2)';
    valor.style.fontSize = '28px';
}

function diminuiTamanho(event) {
    valor.style.transition = 'transform 0.2s';
    valor.style.transform = 'scale(1.0)';
    valor.style.fontSize = '22px';
}

//Funções de alteração de cor
function mudaCorEuro(event) {
    botaoEuro.style.background = 'red';
    botaoEuro.style.transition = 'transform 0.2s';
    botaoEuro.style.transform = 'scale(1.2)';
}

function restauraCorEuro(event) {
    botaoEuro.style.background = 'rgb(255, 94, 0)';
    botaoEuro.style.transition = 'transform 0.2s';
    botaoEuro.style.transform = 'scale(1.0)';
}

function mudaCorLibra(event) {
    botaoLibra.style.background = 'red';
    botaoLibra.style.transition = 'transform 0.2s';
    botaoLibra.style.transform = 'scale(1.2)';
}

function restauraCorLibra(event) {
    botaoLibra.style.background = 'rgb(255, 94, 0)';
    botaoLibra.style.transition = 'transform 0.2s';
    botaoLibra.style.transform = 'scale(1.0)';
}

function mudaCorDolar(event) {
    botaoDolar.style.background = 'red';
    botaoDolar.style.transition = 'transform 0.2s';
    botaoDolar.style.transform = 'scale(1.2)';
}

function restauraCorDolar(event) {
    botaoDolar.style.background = 'rgb(255, 94, 0)';
    botaoDolar.style.transition = 'transform 0.2s';
    botaoDolar.style.transform = 'scale(1.0)';
}