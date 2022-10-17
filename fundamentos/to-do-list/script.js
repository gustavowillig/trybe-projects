const comecoLista = document.getElementById('lista-tarefas');
function tarefaFeitaOuDesfeita(evento) {
  const elementoLista = evento.target;
  if (elementoLista.classList.contains('completed')) {
    elementoLista.classList.remove('completed');
  } else {
    elementoLista.classList.add('completed');
  }
}
function mudarCorBackGround(evento) {
  const elementoJaSelecionado = document.querySelector('.selected');
  const elementoLista = evento.target;
  if (elementoJaSelecionado) {
    elementoJaSelecionado.classList.remove('selected');
  }
  elementoLista.classList.add('selected');
}
function propriedadesDaLista() {
  const textoTarefa = document.getElementById('texto-tarefa');
  if (textoTarefa !== '') {
    const tarefaAdicionar = document.createElement('li');
    comecoLista.appendChild(tarefaAdicionar);
    tarefaAdicionar.innerText = textoTarefa.value;
    tarefaAdicionar.addEventListener('click', mudarCorBackGround);
    tarefaAdicionar.addEventListener('dblclick', tarefaFeitaOuDesfeita);
    textoTarefa.value = '';
  }
}
function removeTodasTarefas() {
  while (comecoLista.firstChild) {
    comecoLista.removeChild(comecoLista.firstChild);
  }
}
function removeCompletados() {
  const tarefaListaCompletados = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaListaCompletados.length; index += 1) {
    comecoLista.removeChild(tarefaListaCompletados[index]);
  }
}
function salvarLista() {
  const acharListas = document.getElementsByTagName('li');
  const arrayConteudoListas = [];
  for (let index = 0; index < acharListas.length; index += 1) {
    if (acharListas[index].classList.contains('completed')) {
      arrayConteudoListas.push({ conteudo: acharListas[index].innerText, classe: 'completed' });
    } else {
      arrayConteudoListas.push({ conteudo: acharListas[index].innerText, classe: 'none' });
    }
  }
  localStorage.setItem('conteudoLista', JSON.stringify(arrayConteudoListas));
}
function moverParaCima() {
  const elementoJaSelecionado = document.querySelector('.selected');
  if (elementoJaSelecionado && elementoJaSelecionado.previousElementSibling) {
    comecoLista.insertBefore(elementoJaSelecionado, elementoJaSelecionado.previousElementSibling);
  }
}
function moverParaBaixo() {
  const elementoJaSelecionado = document.querySelector('.selected');
  if (elementoJaSelecionado && elementoJaSelecionado.nextElementSibling) {
    comecoLista.insertBefore(elementoJaSelecionado.nextElementSibling, elementoJaSelecionado);
  }
}
function removerSelecionado() {
  const elementoJaSelecionado = document.querySelector('.selected');
  if (elementoJaSelecionado) {
    comecoLista.removeChild(elementoJaSelecionado);
  }
}
function adicionarLista() {
  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  botaoCriarTarefa.addEventListener('click', propriedadesDaLista);
  const botaoLimparTarefas = document.getElementById('apaga-tudo');
  botaoLimparTarefas.addEventListener('click', removeTodasTarefas);
  const botaoLimparCompletados = document.getElementById('remover-finalizados');
  botaoLimparCompletados.addEventListener('click', removeCompletados);
  const botaoSalvar = document.getElementById('salvar-tarefas');
  botaoSalvar.addEventListener('click', salvarLista);
  const botaoUp = document.getElementById('mover-cima');
  botaoUp.addEventListener('click', moverParaCima);
  const botaoDown = document.getElementById('mover-baixo');
  botaoDown.addEventListener('click', moverParaBaixo);
  const botaoRemoverSelecionado = document.getElementById('remover-selecionado');
  botaoRemoverSelecionado.addEventListener('click', removerSelecionado);
}
function atribuitStorageLi(conteudoDaListaRetornado) {
  for (let index = 0; index < conteudoDaListaRetornado.length; index += 1) {
    const tarefaAdicionar = document.createElement('li');
    comecoLista.appendChild(tarefaAdicionar);
    tarefaAdicionar.innerText = conteudoDaListaRetornado[index].conteudo;
    if (conteudoDaListaRetornado[index].classe === 'completed') {
      tarefaAdicionar.classList.add('completed');
    }
    tarefaAdicionar.addEventListener('click', mudarCorBackGround);
    tarefaAdicionar.addEventListener('dblclick', tarefaFeitaOuDesfeita);
  }
}
function initialize() {
  if (localStorage.getItem('conteudoLista')) {
    const conteudoDaListaRetornado = JSON.parse(localStorage.getItem('conteudoLista'));
    atribuitStorageLi(conteudoDaListaRetornado);
  }
}
initialize();
adicionarLista();
