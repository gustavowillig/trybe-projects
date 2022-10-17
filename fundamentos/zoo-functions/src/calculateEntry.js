const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const numberChild = entrants.filter((entrant) => entrant.age < 18).length;
  const numberAdults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const numberSenior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { adult: numberAdults, child: numberChild, senior: numberSenior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  return adult * adultPrice + child * childPrice + senior * seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
