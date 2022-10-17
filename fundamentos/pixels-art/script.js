const acharMain = document.querySelector('main');
let paletaCores;// = localStorage.getItem('colorPalette');
function armazenaBoard() {
  const acharBoard = document.getElementsByClassName('pixel');
  const arrayPixels = [];
  for (let index = 0; index < acharBoard.length; index += 1) {
    arrayPixels.push(acharBoard[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(arrayPixels));
}
function mudarCoresDoDiv(cores, acharCores) {
  let mudarCor;
  for (let index = 0; index < cores.length; index += 1) {
    mudarCor = acharCores[index];
    mudarCor.style.backgroundColor = cores[index];
  }
}
function criarPaletaCores(cores) {
  if (!paletaCores) {
    paletaCores = document.createElement('div');
    paletaCores.id = 'color-palette';
    acharMain.appendChild(paletaCores);
    for (let index = 0; index < cores.length; index += 1) {
      const divCores = document.createElement('div');
      divCores.className = 'color';
      divCores.style.backgroundColor = cores[index];
      paletaCores.appendChild(divCores);
    }
    localStorage.setItem('colorPalette', JSON.stringify(cores));
  } else {
    const acharCores = document.getElementsByClassName('color');
    mudarCoresDoDiv(cores, acharCores);
    localStorage.setItem('colorPalette', JSON.stringify(cores));
  }
}
function diferenteCor(cor, arrayCores) {
  let diferenteOuIgual = true;
  for (let index = 0; index < arrayCores.length; index += 1) {
    if (cor === arrayCores[index]) {
      diferenteOuIgual = false;
    }
  }
  return diferenteOuIgual;
}
function randomizaArrayPaleta() {
  // const options = ['red', 'blue', 'yellow', 'green', 'purple', 'pink'];
  const arrayCores = [];
  arrayCores.push('rgb(0, 0, 0)');
  let counter = 1;
  while (counter < 4) {
    const rgb1 = parseInt(Math.random() * 255, 10);
    const rgb2 = parseInt(Math.random() * 255, 10);
    const rgb3 = parseInt(Math.random() * 255, 10);
    const corEscolhida = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
    if (diferenteCor(corEscolhida, arrayCores)) {
      arrayCores.push(corEscolhida);
      counter += 1;
    }
  }
  criarPaletaCores(arrayCores);
}
function initialize() {
  if (localStorage.getItem('colorPalette')) {
    const recoveryCores = JSON.parse(localStorage.getItem('colorPalette'));
    criarPaletaCores(recoveryCores);
  } else {
    randomizaArrayPaleta();
  }
}
function criarBoard(numLargura) {
  const boardTotal = document.createElement('div');
  acharMain.appendChild(boardTotal);
  boardTotal.id = 'pixel-board';
  boardTotal.style.maxWidth = `${numLargura * 40 + 39}px`;
  // boardTotal.style.gridTemplateColumns = `repeat(${numLargura}, 40px)`;
  for (let bloco = 0; bloco < (numLargura * numLargura); bloco += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    boardTotal.appendChild(pixel);
  }
  localStorage.setItem('boardSize', numLargura);
}
function selecaoDinamica(event) {
  const corClasseSelecionada = document.querySelector('.selected');
  corClasseSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
function selecaoInicial(coresSelecionadas) {
  coresSelecionadas[0].classList.add('selected');
  for (let index = 0; index < coresSelecionadas.length; index += 1) {
    coresSelecionadas[index].addEventListener('click', selecaoDinamica);
  }
}
function mudarCorDoElemento(evento) {
  const corAtribuir = document.querySelector('.selected');
  const boardMuda = evento.target;
  boardMuda.style.backgroundColor = corAtribuir.style.backgroundColor;
  armazenaBoard();
}
function mudarCorDoBoard() {
  const acharBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < acharBoard.length; index += 1) {
    acharBoard[index].addEventListener('click', mudarCorDoElemento);
  }
}
function limparBoard() {
  const buscarBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < buscarBoard.length; index += 1) {
    buscarBoard[index].style.backgroundColor = 'white';
  }
  armazenaBoard();
}
function criarBoardComLocalStorage() {
  if (localStorage.getItem('boardSize')) {
    const recoverySizeBoard = localStorage.getItem('boardSize');
    criarBoard(recoverySizeBoard);
  } else {
    criarBoard(5);
  }
}
function initializeBoard() {
  criarBoardComLocalStorage();
  if (localStorage.getItem('pixelBoard') !== null) {
    const recoveryBoard = JSON.parse(localStorage.getItem('pixelBoard'));
    // criarBoard(5);
    const acharBoard = document.getElementsByClassName('pixel');
    for (let index = 0; index < acharBoard.length; index += 1) {
      acharBoard[index].style.backgroundColor = recoveryBoard[index];
    }
  }
}
function criarBotoes() {
  const divParaBotoes = document.createElement('div');
  acharMain.appendChild(divParaBotoes);
  divParaBotoes.className = 'buttonsObrigatorio';
  const botaoRandomizaCorPaleta = document.createElement('button');
  botaoRandomizaCorPaleta.innerText = 'Cores aleatórias';
  botaoRandomizaCorPaleta.id = 'button-random-color';
  divParaBotoes.appendChild(botaoRandomizaCorPaleta);
  botaoRandomizaCorPaleta.addEventListener('click', randomizaArrayPaleta);
  const botaoLimpar = document.createElement('button');
  botaoLimpar.innerText = 'Limpar';
  botaoLimpar.id = 'clear-board';
  divParaBotoes.appendChild(botaoLimpar);
  botaoLimpar.addEventListener('click', limparBoard);
}
function setarNovoBoard() {
  const inputUsuario = document.getElementById('board-size');
  const boardTotal = document.getElementById('pixel-board');
  if (inputUsuario.value === '') {
    alert('Board inválido!');
  } else if (inputUsuario.value < 5) {
    boardTotal.remove();
    criarBoard(5);
  } else if (inputUsuario.value > 50) {
    boardTotal.remove();
    criarBoard(50);
  } else {
    boardTotal.remove();
    criarBoard(inputUsuario.value);
  }
  mudarCorDoBoard();
}

function criarInputUsuario() {
  const divParaInput = document.createElement('div');
  acharMain.appendChild(divParaInput);
  divParaInput.className = 'buttonOpcional';
  const inputUsuario = document.createElement('input');
  inputUsuario.id = 'board-size';
  inputUsuario.type = 'number';
  inputUsuario.min = 1;
  inputUsuario.max = 50;
  divParaInput.appendChild(inputUsuario);
  const botaoInput = document.createElement('button');
  botaoInput.innerText = 'VQV';
  botaoInput.id = 'generate-board';
  divParaInput.appendChild(botaoInput);
  botaoInput.addEventListener('click', setarNovoBoard);
}
initialize();
const coresSelecionadas = document.getElementsByClassName('color');
selecaoInicial(coresSelecionadas);
criarBotoes();
criarInputUsuario();
initializeBoard();
mudarCorDoBoard();
armazenaBoard();
