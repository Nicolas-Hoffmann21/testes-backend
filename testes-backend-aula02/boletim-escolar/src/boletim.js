export const calcularMedia = (notas) => {
  if (!notas || notas.length === 0) return 0;
  return notas.reduce((acc, n) => acc + n, 0) / notas.length;
};

export const situacao = (media) => {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
};

export const estaAprovado = (media) => media >= 7;

export const maiorNota = (notas) => {
  if (!notas || notas.length === 0) return 0;
  return Math.max(...notas);
};

export const quantidadeAcimaDe = (notas, corte) => {
  return notas.filter(n => n >= corte).length;
};