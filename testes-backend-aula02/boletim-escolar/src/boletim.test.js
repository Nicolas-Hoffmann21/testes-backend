import { calcularMedia, situacao, estaAprovado, maiorNota, quantidadeAcimaDe } from './boletim';

describe('Boletim Escolar', () => {
  test('deve calcular a média de um array de notas', () => {
    // Arrange
    const notas = [5, 6];
    // Act
    const res = calcularMedia(notas);
    // Assert
    expect(res).toBe(5.5);
  });

  test('deve retornar Aprovado com média no limite 7', () => {
    // Arrange
    const media = 7;
    // Act
    const res = situacao(media);
    // Assert
    expect(res).toBe("Aprovado");
  });

  test('deve retornar Reprovado com média 4.9', () => {
    // Arrange
    const media = 4.9;
    // Act
    const res = situacao(media);
    // Assert
    expect(res).toBe("Reprovado");
  });

  test('deve retornar false para estaAprovado com média 6', () => {
    // Arrange
    const media = 6;
    // Act
    const res = estaAprovado(media);
    // Assert
    expect(res).toBe(false);
  });

  test('deve contar notas maiores ou iguais ao corte', () => {
    // Arrange
    const notas = [4, 7, 8.5, 6.9], corte = 7;
    // Act
    const res = quantidadeAcimaDe(notas, corte);
    // Assert
    expect(res).toBe(2);
  });

  test('deve identificar a maior nota', () => {
    // Arrange
    const notas = [6, 9.5, 8];
    // Act
    const res = maiorNota(notas);
    // Assert
    expect(res).toBe(9.5);
  });

  test('deve retornar true para estaAprovado com média 7', () => {
    // Arrange
    const media = 7;
    // Act
    const res = estaAprovado(media);
    // Assert
    expect(res).toBe(true);
  });
});