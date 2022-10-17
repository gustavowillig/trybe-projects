// Requisito 3 - botão entrar

const botaoEntrar = document.getElementById('btn-entrar');

// Requisito 18 - desabilitar ou habilitar o button

const botaoEnviar = document.getElementById('submit-btn');
const checkboxAcordo = document.getElementById('agreement');

// Requisito 18 - Iniciando a página o button está desabilitado

botaoEnviar.disabled = true;

// Requisito 20 - Text area
const comentario = document.getElementById('textarea');
const contador = document.getElementById('counter');

// Requisito 21 - Constantes
const formularioAvaliacao = document.getElementById('evaluation-form');
const mainPagina = document.querySelector('main');
const logoImagem = document.getElementById('trybewarts-forms-logo');

// Requisito 18 - Função que muda estado do button Enviar

function mudarEstadoButtonEnviar() {
  // Entra no if se o button estiver desabilitado
  if (botaoEnviar.disabled) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
// Requisito 3 - Função que valida o e-mail

function validaEmailSenhabackup() {
  const email = document.getElementById('emailbackup').value;
  const senha = document.getElementById('passwordbackup').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function validaEmailSenha() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Requisito 20 - Função para contagem de caracteres
function contaCaracteres(e) {
  const caracteres = e.target.value.length;
  const caracteresRestantes = 500 - Number(caracteres);
  contador.innerText = caracteresRestantes;
}

// Requisito 21 - Quando envia o formulário, as informações passadas ficam nos campos
function colocarMateriasAPrender(respostaUsuario) {
  const materias = document.createElement('p');
  const materiasPegas = document.querySelectorAll('.subject:checked');
  materias.innerText = 'Matérias: ';
  for (let index = 0; index < materiasPegas.length; index += 1) {
    if (index === materiasPegas.length - 1) {
      materias.innerText += `${materiasPegas[index].value}`;
    } else {
      materias.innerText += `${materiasPegas[index].value}, `;
    }
  }
  respostaUsuario.appendChild(materias);
}

function segundaParteMudarPagina(respostaUsuario) {
  const casa = document.createElement('p');
  const casaPego = document.getElementById('house');
  casa.innerText = `Casa: ${casaPego.value}`;
  respostaUsuario.appendChild(casa);
  const familia = document.createElement('p');
  const familiaPego = document.querySelector('input[name=family]:checked');
  familia.innerText = `Família: ${familiaPego.value}`;
  respostaUsuario.appendChild(familia);
  colocarMateriasAPrender(respostaUsuario);
  const nota = document.createElement('p');
  const notaPega = document.querySelector('input[name=rate]:checked');
  nota.innerText = `Avaliação: ${notaPega.value}`;
  respostaUsuario.appendChild(nota);
  const observacoes = document.createElement('p');
  const observacoesPegas = document.getElementById('textarea');
  observacoes.innerText = `Observações: ${observacoesPegas.value}`;
  respostaUsuario.appendChild(observacoes);
}

function mudarEstadodaPagina(/* event */) {
  formularioAvaliacao.style.display = 'none';
  const respostaUsuario = document.createElement('div');
  mainPagina.insertBefore(respostaUsuario, logoImagem);
  respostaUsuario.id = 'form-data';
  respostaUsuario.style.width = '675px';
  const nomeFormulario = document.createElement('p');
  const nomePego = document.getElementById('input-name');
  const sobrenomePego = document.getElementById('input-lastname');
  nomeFormulario.innerText = `Nome: ${nomePego.value} ${sobrenomePego.value}`;
  respostaUsuario.appendChild(nomeFormulario);
  const email = document.createElement('p');
  const emailPego = document.getElementById('input-email');
  email.innerText = `Email: ${emailPego.value}`;
  respostaUsuario.appendChild(email);
  segundaParteMudarPagina(respostaUsuario);
  // event.preventDefault();
}

function darDisplayLogin() {
  const menuInvisivel = document.getElementById('menu-invisivel');
  if (window.getComputedStyle(menuInvisivel).display === 'none') {
    menuInvisivel.style.display = 'flex';
  } else {
    menuInvisivel.style.display = 'none';
  }
}

// Adiciona o event listener para o campo do checkbox
checkboxAcordo.addEventListener('change', mudarEstadoButtonEnviar);

// Requisito 3 - Adiciona o event listener para o botão entrar
botaoEntrar.addEventListener('click', validaEmailSenha);

// Requisito 20 - Adiciona o event listener para o campo de comentários
comentario.addEventListener('keyup', contaCaracteres);

// Requisito 21 - Adiciona o event listener no botao enviar formulario
botaoEnviar.addEventListener('click', mudarEstadodaPagina);

const menu = document.querySelector('.material-icons');

menu.addEventListener('click', darDisplayLogin);

const botaoEntrarbackup = document.getElementById('btn-entrarbackup');

botaoEntrarbackup.addEventListener('click', validaEmailSenhabackup);

window.onresize = function alterarDisplay() {
  if (document.documentElement.clientWidth > `${853}`) {
    const menuInvisivel = document.getElementById('menu-invisivel');
    menuInvisivel.style.display = 'none';
  }
};
