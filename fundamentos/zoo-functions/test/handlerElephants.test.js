const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verificar retorno indefinido caso parâmetro de  handlerElephants seja indefinido', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verificar retorno adequado caso parâmetro de  handlerElephants seja diferente de string', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verificar retorno adequado caso parâmetro de  handlerElephants já seja uma chave do objeto Elephants', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verificar retorno adequado caso parâmetro de  handlerElephants não seja uma chave do objeto Elephants', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('clube')).toBe(null);
  });
});
