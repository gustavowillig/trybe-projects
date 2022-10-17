const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  // seu código aqui
  let eManager;
  if (id === stephanieId || id === olaId || id === burlId) {
    eManager = true;
  } else {
    eManager = false;
  }
  return eManager;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const { employees } = data;
    const colaboradores = employees.filter(({ managers }) =>
      managers.some((manager) => manager === managerId));
    const colaboradoresNomes = colaboradores.map(({ firstName, lastName }) =>
      `${firstName} ${lastName}`);
    return colaboradoresNomes;
  }
}

getRelatedEmployees(stephanieId);

module.exports = { isManager, getRelatedEmployees };
