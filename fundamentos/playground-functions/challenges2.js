// Desafio 11
function generateNumeroTelefone(arrayInteiros) {
  let mensagem = '(';
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    mensagem += arrayInteiros[index];
    if (index === 1) {
      mensagem += ') ';
    }
    if (index === 6) {
      mensagem += '-';
    }
  }
  return mensagem;
}
function contadorDoArray(arrayInteiros, numeroAvaliado) {
  let numeroRepeticao = 0;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] === numeroAvaliado) {
      numeroRepeticao += 1;
    }
  }
  return numeroRepeticao;
}
function checkTres(arrayInteiros) {
  let numeroRepeticao = 0;
  let numeroAvaliado = 0;
  let condicao = false;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    numeroAvaliado = arrayInteiros[index];
    numeroRepeticao = contadorDoArray(arrayInteiros, numeroAvaliado);
    if (numeroRepeticao >= 3) {
      condicao = true;
    }
  }
  return condicao;
}
function checkMaiorNove(arrayInteiros) {
  let condicao = false;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] > 9) {
      condicao = true;
    }
  }
  return condicao;
}
function checkMenorZero(arrayInteiros) {
  let condicao = false;
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    if (arrayInteiros[index] < 0) {
      condicao = true;
    }
  }
  return condicao;
}
function checkNumerosDoArray(arrayInteiros) {
  let mensagem = '';
  if (checkMenorZero(arrayInteiros) || checkMaiorNove(arrayInteiros) || checkTres(arrayInteiros)) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
  } else {
    mensagem = generateNumeroTelefone(arrayInteiros);
  }
  return mensagem;
}
function checkCountArray(arrayInteiros) {
  let condicao;
  if (arrayInteiros.length === 11) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}
function generatePhoneNumber(arrayInteiros) {
  // seu código aqui
  let mensagem = '';
  if (checkCountArray(arrayInteiros)) {
    mensagem = checkNumerosDoArray(arrayInteiros);
  } else {
    mensagem = 'Array com tamanho incorreto.';
  }
  return mensagem;
}

// Desafio 12
function checkSubLado(lineTotal, line) {
  let indexOfLine = lineTotal.indexOf(line);
  let sub = 0;
  let condicao = false;
  if (indexOfLine === 0) {
    sub = Math.abs(lineTotal[1] - lineTotal[2]);
  } else if (indexOfLine === 1) {
    sub = Math.abs(lineTotal[0] - lineTotal[2]);
  } else {
    sub = Math.abs(lineTotal[1] - lineTotal[0]);
  }
  if (sub < line) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}
function checkSomaLado(lineTotal, line) {
  let soma = 0;
  let condicao = false;
  for (let index = 0; index < lineTotal.length; index += 1) {
    soma += lineTotal[index];
  }
  soma -= line;
  if (soma > line) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let lineTotal = [];
  lineTotal.push(lineA);
  lineTotal.push(lineB);
  lineTotal.push(lineC);
  let condicao = false;
  for (let index = 0; index < lineTotal.length; index += 1) {
    if (checkSomaLado(lineTotal, lineTotal[index]) && checkSubLado(lineTotal, lineTotal[index])) {
      condicao = true;
    } else {
      condicao = false;
    }
  }
  return condicao;
}

// Desafio 13
function hydrate(frase) {
  // seu código aqui
  let num = /\d+/g;
  let result = frase.match(num);
  let soma = 0;
  let resposta = '';
  for (let index = 0; index < result.length; index += 1) {
    soma += parseInt(result[index], 10);
  }
  if (soma === 1) {
    resposta += soma;
    resposta += ' copo de água';
  } else {
    resposta += soma;
    resposta += ' copos de água';
  }
  return resposta;
}
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
