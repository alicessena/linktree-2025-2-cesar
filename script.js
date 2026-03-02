document.addEventListener("DOMContentLoaded", function () {
  const hoje = new Date().getDay();
  // 0 = Domingo
  // 1 = Segunda
  // 2 = Terça
  // 3 = Quarta
  // 4 = Quinta
  // 5 = Sexta
  // 6 = Sábado

  const tabela = document.getElementById("tabela-horario");
  const linhas = tabela.rows;

  // Índice das colunas:
  // 0 = Turno
  // 1 = Horário
  // 2 = Segunda
  // 3 = Terça
  // 4 = Quarta
  // 5 = Quinta
  // 6 = Sexta
  // 7 = Sábado

  const mapaDias = {
    1: 2, // Segunda
    2: 3, // Terça
    3: 4, // Quarta
    4: 5, // Quinta
    5: 6, // Sexta
    6: 7  // Sábado
  };

  const colunaAtual = mapaDias[hoje];

  if (colunaAtual !== undefined) {
    for (let i = 0; i < linhas.length; i++) {
      if (linhas[i].cells[colunaAtual]) {
        linhas[i].cells[colunaAtual].classList.add("dia-atual");
      }
    }
  }
});