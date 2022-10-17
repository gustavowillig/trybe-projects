const data = require('../data/zoo_data');

function getEmployeesByNameOrId(employees, species, param) {
  const coberturaColaboradores = employees.map((employee) => ({ id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.filter((typeSpecie) => employee.responsibleFor
      .some((animalID) => animalID === typeSpecie.id)).map(({ name: nome }) => nome),
    locations: species.filter((typeSpecie) => employee.responsibleFor
      .some((animalID) => animalID === typeSpecie.id)).map(({ location }) => location) }));
  if (param === undefined) {
    return coberturaColaboradores;
  }
  if (param.name) {
    const colaboradorByName = coberturaColaboradores.find((colaborador) => colaborador.fullName
      .split(' ').some((partName) => partName === param.name));
    return colaboradorByName;
  }
  if (param.id) {
    const colaboradorById = coberturaColaboradores.find(({ id }) => param.id === id);
    return colaboradorById;
  }
}

function getEmployeesCoverage(param) {
  // seu código aqui
  const { employees, species } = data;
  if (employees.some((employee) => param === undefined)) {
    return getEmployeesByNameOrId(employees, species);
  } if (employees.some((employee) => employee.firstName === param.name
  || employee.lastName === param.name || employee.id === param.id)) {
    return getEmployeesByNameOrId(employees, species, param);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
