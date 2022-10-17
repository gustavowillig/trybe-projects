const data = require('../data/zoo_data');

function getScheduleAll(species, scheduleTarget) {
  const WeekDays = Object.keys(data.hours);
  const { hours } = data;
  const objetoAllDays = {};
  WeekDays.forEach((day) => {
    if (day === 'Monday') {
      objetoAllDays[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      objetoAllDays[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((typeSpecies) => typeSpecies.availability
          .includes(day)).map(({ name: nome }) => nome),
      };
    }
  });
  if (WeekDays.includes(scheduleTarget)) {
    return { [scheduleTarget]: objetoAllDays[scheduleTarget] };
  }
  return objetoAllDays;
}
function getScheduleByAnimal(scheduleTarget, species) {
  return species.find(({ name: nome }) => nome === scheduleTarget).availability;
}
function getSchedule(scheduleTarget) {
  // seu código aqui
  const WeekDays = Object.keys(data.hours);
  const { species } = data;
  const nameSpecies = species.map(({ name: nome }) => nome);
  if (WeekDays.some((day) => scheduleTarget === day)) {
    return getScheduleAll(species, scheduleTarget);
  } if (nameSpecies.some((animal) => scheduleTarget === animal)) {
    return getScheduleByAnimal(scheduleTarget, species);
  }
  return getScheduleAll(species);
}
// console.log(getSchedule('Monday'));

module.exports = getSchedule;
