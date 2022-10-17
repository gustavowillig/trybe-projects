const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui - começo do projeto
  const { species } = data;
  let animaisFIltradosId = [];
  animaisFIltradosId = species.filter((typeSpecies) => ids.includes(typeSpecies.id) === true);
  return animaisFIltradosId;
}

module.exports = getSpeciesByIds;
