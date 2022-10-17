const variavelBall = document.getElementsByClassName('ball');
let variavelAcerto = 0;
function pegarPergunta() {
  const indiceResposta = parseInt(Math.random() * (variavelBall.length), 10);
  const perguntaFeita = document.getElementById('rgb-color');
  perguntaFeita.innerText = variavelBall[indiceResposta].style.backgroundColor;
}
function gerarCor() {
  const rgb1 = parseInt(Math.random() * 255, 10);
  const rgb2 = parseInt(Math.random() * 255, 10);
  const rgb3 = parseInt(Math.random() * 255, 10);
  const corEscolhida = `rgb( ${rgb1}, ${rgb2}, ${rgb3})`;
  return corEscolhida;
}
function colocarCoraleatória() {
  for (let index = 0; index < variavelBall.length; index += 1) {
    variavelBall[index].style.backgroundColor = gerarCor();
  }
  pegarPergunta();
}
function analisarResposta(evento) {
  const perguntaFeita = document.getElementById('rgb-color');
  const respostaParaUsuario = document.getElementById('answer');
  const placar = document.getElementById('score');
  if (evento.target.style.backgroundColor === perguntaFeita.innerText) {
    respostaParaUsuario.innerText = 'Acertou!';
    respostaParaUsuario.style.fontWeight = 'bold';
    variavelAcerto += 3;
    placar.innerText = `Placar: ${variavelAcerto}`;
  } else {
    respostaParaUsuario.innerText = 'Errou! Tente novamente!';
    respostaParaUsuario.style.fontWeight = 'bold';
    variavelAcerto -= 1;
    if (variavelAcerto < 0) {
      variavelAcerto = 0;
    }
    placar.innerText = `Placar: ${variavelAcerto}`;
  }
}
function adicionarRespostaUsuario() {
  for (let index = 0; index < variavelBall.length; index += 1) {
    variavelBall[index].addEventListener('click', analisarResposta);
  }
}
function resetarJogo() {
  const respostaParaUsuario = document.getElementById('answer');
  colocarCoraleatória();
  respostaParaUsuario.innerText = 'Escolha uma cor';
  adicionarRespostaUsuario();
}
function aplicarFuncaoResetJogo() {
  const botaoReset = document.getElementById('reset-game');
  botaoReset.addEventListener('click', resetarJogo);
}
colocarCoraleatória();
adicionarRespostaUsuario();
aplicarFuncaoResetJogo();
