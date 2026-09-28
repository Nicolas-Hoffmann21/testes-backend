import { percentualPresenca, reprovadoPorFalta } from './frequencia';

describe('Módulo de Frequência', () => {
  test('deve calcular o percentual de presença correto (90%)', () => {
    // Arrange
    const aulas = 40, faltas = 4;
    // Act
    const res = percentualPresenca(aulas, faltas);
    // Assert
    expect(res).toBe(90);
  });

  test('deve calcular 100% de presença sem faltas', () => {
    // Arrange
    const aulas = 40, faltas = 0;
    // Act
    const res = percentualPresenca(aulas, faltas);
    // Assert
    expect(res).toBe(100);
  });

  test('não deve reprovar por falta com 90% de presença', () => {
    // Arrange
    const aulas = 40, faltas = 4;
    // Act
    const res = reprovadoPorFalta(aulas, faltas);
    // Assert
    expect(res).toBe(false);
  });

  test('deve reprovar por falta com 70% de presença', () => {
    // Arrange
    const aulas = 40, faltas = 12;
    // Act
    const res = reprovadoPorFalta(aulas, faltas);
    // Assert
    expect(res).toBe(true);
  });

  test('não deve reprovar por falta com exatamente 75% de presença', () => {
    // Arrange
    const aulas = 40, faltas = 10;
    // Act
    const res = reprovadoPorFalta(aulas, faltas);
    // Assert
    expect(res).toBe(false);
  });
});