const textInput = document.getElementById('text-input');
const inputImagem = document.getElementById('meme-insert');
const imagemColocada = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeUm = document.getElementById('meme-1');
const memeDois = document.getElementById('meme-2');
const memeTres = document.getElementById('meme-3');
const memeQuatro = document.getElementById('meme-4');
const container = document.getElementById('meme-image-container');
function preencherTexto() {
  const memeText = document.getElementById('meme-text');
  memeText.innerText = textInput.value;
}
function atualizaImagem(evento) {
  const fileInput = new FileReader();

  fileInput.addEventListener('load', () => {
    imagemColocada.src = fileInput.result;
  });

  fileInput.readAsDataURL(evento.target.files[0]);
}
function mudaBorda(evento) {
  if (evento.target.id === 'fire') {
    container.style.border = 'rgb(255, 0, 0) dashed 3px';
  } else if (evento.target.id === 'water') {
    container.style.border = 'rgb(0, 0, 255) double 5px';
  } else if (evento.target.id === 'earth') {
    container.style.border = 'rgb(0, 128, 0) groove 6px';
  }
}
function mudaImagem(evento) {
  imagemColocada.src = evento.target.src;
}
textInput.addEventListener('input', preencherTexto);
inputImagem.addEventListener('change', atualizaImagem);
fireButton.addEventListener('click', mudaBorda);
waterButton.addEventListener('click', mudaBorda);
earthButton.addEventListener('click', mudaBorda);
memeUm.addEventListener('click', mudaImagem);
memeDois.addEventListener('click', mudaImagem);
memeTres.addEventListener('click', mudaImagem);
memeQuatro.addEventListener('click', mudaImagem);
