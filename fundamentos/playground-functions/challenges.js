// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let compareParams;
  if (param1 && param2) {
    compareParams = true;
  } else {
    compareParams = false;
  }
  return compareParams;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavra = '';
  let conjuntoPalavras = [];
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === ' ') {
      conjuntoPalavras.push(palavra);
      palavra = '';
    } else if (index === frase.length - 1) {
      palavra += frase[index];
      conjuntoPalavras.push(palavra);
      palavra = '';
    } else {
      palavra += frase[index];
    }
  }
  return conjuntoPalavras;
}

// Desafio 4
function concatName(arrayPalavra) {
  // seu código aqui
  let fraseConcatenada = '';
  fraseConcatenada = arrayPalavra[arrayPalavra.length - 1];
  fraseConcatenada += ', ';
  fraseConcatenada += arrayPalavra[0];
  return fraseConcatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points;
  points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(arrayInteiros) {
  // seu código aqui
  let maximoValor = arrayInteiros[0];
  let maxCounter = 1;
  for (let index = 1; index < arrayInteiros.length; index += 1) {
    if (maximoValor === arrayInteiros[index]) {
      maxCounter += 1;
    } else if (maximoValor < arrayInteiros[index]) {
      maximoValor = arrayInteiros[index];
      maxCounter = 1;
    }
  }
  return maxCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let discat1 = Math.abs(cat1 - mouse);
  let discat2 = Math.abs(cat2 - mouse);
  let resposta = '';
  if (discat1 < discat2) {
    resposta = 'cat1';
  } else if (discat1 > discat2) {
    resposta = 'cat2';
  } else {
    resposta = 'os gatos trombam e o rato foge';
  }
  return resposta;
}

// Desafio 8

function retorneRespostas(arrayInteiros, index) {
  let resposta = '';
  if (arrayInteiros[index] % 3 === 0 && arrayInteiros[index] % 5 === 0) {
    resposta = 'fizzBuzz';
  } else if (arrayInteiros[index] % 3 === 0) {
    resposta = 'fizz';
  } else if (arrayInteiros[index] % 5 === 0) {
    resposta = 'buzz';
  } else {
    resposta = 'bug!';
  }
  return resposta;
}
function fizzBuzz(arrayInteiros) {
  // seu código aqui
  let arrayRespostas = [];
  for (let index = 0; index < arrayInteiros.length; index += 1) {
    arrayRespostas.push(retorneRespostas(arrayInteiros, index));
  }
  return arrayRespostas;
}
// Desafio 9
function compareEncode(letra) {
  let troca = letra;
  let relacao = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let key in relacao) {
    if (letra === key) {
      troca = relacao[key];
    }
  }
  return troca;
}
function compareDecode(numero) {
  let troca = numero;
  let relacao = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let key in relacao) {
    if (numero === relacao[key]) {
      troca = key;
    }
  }
  return troca;
}
function encode(frase) {
  // seu código aqui
  let trocaFrase = '';
  for (let index = 0; index < frase.length; index += 1) {
    trocaFrase += compareEncode(frase[index]);
  }
  return trocaFrase;
}
function decode(frase) {
  // seu código aqui
  let trocaFrase = '';
  for (let index = 0; index < frase.length; index += 1) {
    trocaFrase += compareDecode(frase[index]);
  }
  return trocaFrase;
}
// Desafio 10
function techList(nomesTecnologias, nomePessoa) {
  // seu código aqui
  let variosObjetos = [];
  let tecnologiaOrdenada = nomesTecnologias.sort();
  if (tecnologiaOrdenada.length === 0) {
    variosObjetos = 'Vazio!';
  } else {
    for (let index = 0; index < tecnologiaOrdenada.length; index += 1) {
      variosObjetos.push({ tech: tecnologiaOrdenada[index], name: nomePessoa });
    }
  }
  return variosObjetos;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
