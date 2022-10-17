const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificar se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Retorno dos horários do zoo se a função não tiver parâmetros', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verificar se existe erro caso o parâmetro do dia da semana não existe', () => {
    expect(() => getOpeningHours('Trybe')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verificar se existe erro caso o parâmetro do horário acuse erro na hora', () => {
    expect(() => getOpeningHours('Monday', 'trybe:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verificar se existe erro caso o parâmetro do horário acuse erro nos minutos', () => {
    expect(() => getOpeningHours('Monday', '09:trybe-AM')).toThrow('The minutes should represent a number');
  });
  it('Verificar se existe erro caso o parâmetro da abreviação seja diferente de AM ou PM', () => {
    expect(() => getOpeningHours('Monday', '09:00-FM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verificar se existe erro caso o valor da hora não esteja entre 0 e 12', () => {
    expect(() => getOpeningHours('Monday', '25:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verificar se existe erro caso o valor dos minutos não esteja entre 0 e 59', () => {
    expect(() => getOpeningHours('Monday', '09:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verificar se segunda feira o zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verificar se o seguinte parâmetro vai dar o zoo aberto', () => {
    expect(getOpeningHours('Wednesday', '10:00-AM')).toBe('The zoo is open');
  });
  it('Verificar se o seguinte parâmetro vai dar o zoo aberto', () => {
    expect(getOpeningHours('Friday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Verificar comportamento da função com horas igual a 12', () => {
    expect(getOpeningHours('Tuesday', '12:00-PM')).toBe('The zoo is open');
  });
});
