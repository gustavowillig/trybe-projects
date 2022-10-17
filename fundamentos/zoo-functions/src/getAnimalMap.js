const data = require('../data/zoo_data');

const arrayLocations = ['NE', 'NW', 'SE', 'SW'];
const { species } = data;

function getAnimalMapSex(options) {
  const objetoTudocomNomesSex = {};
  arrayLocations.forEach((location) => {
    objetoTudocomNomesSex[location] = species.filter((typeSpecie) =>
      typeSpecie.location === location)
      .map((typeSpecie) => ({
        [typeSpecie.name]: typeSpecie.residents.filter((animal) => animal.sex === options.sex)
          .map((animal) => animal.name),
      }));
  });
  return objetoTudocomNomesSex;
}

function getAnimalMapSort(options) {
  const objetoTudocomNomesSort = {};
  arrayLocations.forEach((location) => {
    objetoTudocomNomesSort[location] = species.filter((typeSpecie) =>
      typeSpecie.location === location)
      .map((typeSpecie) => ({
        [typeSpecie.name]: typeSpecie.residents.map((animal) => animal.name).sort(),
      }));
  });
  return objetoTudocomNomesSort;
}

function getAnimalMapSortSex(options) {
  const objetoTudocomNomesSortSex = {};
  arrayLocations.forEach((location) => {
    objetoTudocomNomesSortSex[location] = species.filter((typeSpecie) =>
      typeSpecie.location === location)
      .map((typeSpecie) => ({
        [typeSpecie.name]: typeSpecie.residents.filter((animal) => animal.sex === options.sex)
          .map((animal) => animal.name).sort(),
      }));
  });
  return objetoTudocomNomesSortSex;
}

function getAnimalMapFilters(options) {
  const objetoTudocomNomes = {};
  arrayLocations.forEach((location) => {
    objetoTudocomNomes[location] = species.filter((typeSpecie) => typeSpecie.location === location)
      .map((typeSpecie) => ({
        [typeSpecie.name]: typeSpecie.residents.map((animal) => animal.name),
      }));
  });
  if (options.sorted === true && options.sex !== undefined) {
    return getAnimalMapSortSex(options);
  } if (options.sorted === true) {
    return getAnimalMapSort(options);
  } if (options.sex) {
    return getAnimalMapSex(options);
  }
  return objetoTudocomNomes;
}

function getAnimalMapAll() {
  const objetoTudo = {};
  arrayLocations.forEach((location) => {
    objetoTudo[location] = species.filter((typeSpecie) => typeSpecie.location === location)
      .map(({ name: nome }) => nome);
  });
  return objetoTudo;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options || options.includeNames === undefined) {
    return getAnimalMapAll();
  }
  return getAnimalMapFilters(options);
}

module.exports = getAnimalMap;
