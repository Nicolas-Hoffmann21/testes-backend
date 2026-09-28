import { 
  somar, subtrair, multiplicar, dividir, 
  ehPar, potencia, porcentagem, mediaDeTres 
} from './calculadora';

describe('Operações matemáticas', () => {
  test('deve somar dois números', () => {
    // Arrange
    const a = 2, b = 3;
    // Act
    const resultado = somar(a, b);
    // Assert
    expect(resultado).toBe(5);
  });

  test('deve subtrair dois números', () => {
    // Arrange
    const a = 10, b = 4;
    // Act
    const resultado = subtrair(a, b);
    // Assert
    expect(resultado).toBe(6);
  });

  test('deve multiplicar dois números', () => {
    // Arrange
    const a = 3, b = 4;
    // Act
    const resultado = multiplicar(a, b);
    // Assert
    expect(resultado).toBe(12);
  });

  test('deve dividir dois números', () => {
    // Arrange
    const a = 10, b = 2;
    // Act
    const resultado = dividir(a, b);
    // Assert
    expect(resultado).toBe(5);
  });

  test('deve somar números negativos', () => {
    // Arrange
    const a = -2, b = -3;
    // Act
    const resultado = somar(a, b);
    // Assert
    expect(resultado).toBe(-5);
  });

  test('deve retornar null ao dividir por zero', () => {
    // Arrange
    const a = 10, b = 0;
    // Act
    const resultado = dividir(a, b);
    // Assert
    expect(resultado).toBe(null);
  });

  test('deve somar números decimais com arredondamento', () => {
    // Arrange
    const a = 0.1, b = 0.2;
    // Act
    const resultado = somar(a, b);
    const arredondado = Math.round(resultado * 100) / 100;
    // Assert
    expect(arredondado).toBe(0.3);
  });

  test('deve reconhecer 4 como par', () => {
    // Arrange
    const n = 4;
    // Act
    const resultado = ehPar(n);
    // Assert
    expect(resultado).toBe(true);
  });

  test('deve reconhecer 7 como ímpar', () => {
    // Arrange
    const n = 7;
    // Act
    const resultado = ehPar(n);
    // Assert
    expect(resultado).toBe(false);
  });

  test('deve elevar a base ao expoente', () => {
    // Arrange
    const base = 2, expoente = 3;
    // Act
    const resultado = potencia(base, expoente);
    // Assert
    expect(resultado).toBe(8);
  });

  test('deve calcular o percentual de um valor', () => {
    // Arrange
    const valor = 200, percentual = 10;
    // Act
    const resultado = porcentagem(valor, percentual);
    // Assert
    expect(resultado).toBe(20);
  });

  test('deve calcular a média de três números', () => {
    // Arrange
    const a = 6, b = 7, c = 8;
    // Act
    const resultado = mediaDeTres(a, b, c);
    // Assert
    expect(resultado).toBe(7);
  });
});