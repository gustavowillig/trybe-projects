const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  const employeeChosen = employees.find(({ firstName, lastName }) => firstName === employeeName
   || lastName === employeeName);
  return employeeChosen;
}

module.exports = getEmployeeByName;
