const pai = document.getElementById('pixel-board');
const paiPaleta = document.getElementById('color-palette');
const pixeis = document.getElementsByClassName('pixel');
const botaoReseta = document.getElementById('clear-board');
const btnSize = document.getElementById('generate-board');
var color1 = cores();
var color2 = cores();
var color3 = cores();
let tamanhoDigitado = 5;
let tamanhoTotal = 25;
let pixel = 0;


const elemento0 = document.getElementsByClassName('color')[0];
elemento0.classList.add('cor0');

const elemento1 = document.getElementsByClassName('color')[1];
elemento1.classList.add('cor1');
elemento1.style.backgroundColor = color1;

const elemento2 = document.getElementsByClassName('color')[2];
elemento2.classList.add('cor2');
elemento2.style.backgroundColor = color2;

const elemento3 = document.getElementsByClassName('color')[3];
elemento3.classList.add('cor3');
elemento3.style.backgroundColor = color3;

function cores() {
  const hex = '0123456789ABCDEF';
  var cor = '#'
  for (let i = 0; i < 6; i += 1) {
    cor += hex[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function criaPixels(tamanhoDigitado) {

  for (let index = 0; index < tamanhoDigitado * tamanhoDigitado; index += 1) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.classList.add('pixels');
    pai.appendChild(pixel);
    pai.style.maxHeight = (tamanhoDigitado * tamanhoDigitado) / tamanhoDigitado * 40 + 'px';
    pai.style.width = (tamanhoDigitado * tamanhoDigitado) / tamanhoDigitado * 46 + 'px';
  }
}
criaPixels(5);

window.onload = function () {
  const corInicial = document.getElementsByClassName('color')[0];
  corInicial.classList.add('selected');
};

function classeSelected(event) {
  const classSelect = document.getElementsByClassName('selected')[0];
  classSelect.classList.remove('selected');

  const addClasse = event.target;
  addClasse.classList.add('selected');
}

function colocaCor(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  if (colorSelected.classList.contains('cor0') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = 'black';
  } else if (colorSelected.classList.contains('cor1') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = color1;
  } else if (colorSelected.classList.contains('cor2') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = color2;
  } else if (colorSelected.classList.contains('cor3') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = color3;
  }
}

function resetaCores() {
  for (let index = 0; index < tamanhoTotal; index += 1) {
    pixeis[index].style.backgroundColor = 'white';
  }
}

function tamanhoBoard() {
  let input = document.querySelector("input").value;
  if (input == '') {
    window.alert('Board inválido!');
  }
  if (input < 5) {
    input = 5;
  }
  if (input > 50) {
    input = 50;
  }
  while (pai.hasChildNodes()) {
    pai.removeChild(pai.firstChild);
  }
  criaPixels(input);
}

paiPaleta.addEventListener('click', classeSelected);
pai.addEventListener('click', colocaCor);
botaoReseta.addEventListener('click', resetaCores);
btnSize.addEventListener('click', tamanhoBoard)

