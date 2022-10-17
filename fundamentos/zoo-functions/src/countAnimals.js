const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { species } = data;
  if (animal === undefined) {
    const todosAnimais = {};
    species.forEach(({ name: nome, residents }) => { todosAnimais[nome] = residents.length; });
    return todosAnimais;
  } if (animal.sex === undefined) {
    return species.filter(({ name: nome }) => animal.specie === nome)
      .map(({ residents }) => residents.length)[0];
  }
  return species.find(({ name: nome }) => animal.specie === nome).residents
    .filter((individuo) => individuo.sex === animal.sex).length;
}

module.exports = countAnimals;
