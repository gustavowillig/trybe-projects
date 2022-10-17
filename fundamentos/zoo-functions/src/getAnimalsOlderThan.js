const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { species } = data;
  const especieFiltrada = species.find(({ name }) => name === animal);
  const condicaoAnimalsOld = especieFiltrada.residents.every((Individuo) => Individuo.age >= age);
  return condicaoAnimalsOld;
}

module.exports = getAnimalsOlderThan;
