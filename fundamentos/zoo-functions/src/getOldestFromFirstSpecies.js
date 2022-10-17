const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const { species, employees } = data;
  const employeeByID = employees.find((employee) => employee.id === id);
  const firstSpecies = species.find((typeSpecie) => employeeByID.responsibleFor
    .some((animalID) => animalID === typeSpecie.id));
  const animalOld = firstSpecies.residents.reduce((maisVelho, animalAtual) => {
    if (maisVelho.age > animalAtual.age) {
      return maisVelho;
    }
    return animalAtual;
  });
  return Object.values(animalOld);
}

module.exports = getOldestFromFirstSpecies;
