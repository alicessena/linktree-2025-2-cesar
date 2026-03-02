
document.addEventListener("DOMContentLoaded", function () {
  const hoje = new Date().getDay();
  if (hoje === 0) return; 

  const dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const nomeDia = dias[hoje];

  const tabela = document.getElementById("tabela-horario");
  const ths = tabela.querySelectorAll("thead th");

  let indiceColuna = -1;


  ths.forEach((th, index) => {
    if (th.textContent.trim() === nomeDia) {
      indiceColuna = index;
    }
  });

  if (indiceColuna === -1) return;

  ths[indiceColuna].classList.add("dia-atual");

  tabela.querySelectorAll("tbody tr").forEach(tr => {
    const celula = tr.children[indiceColuna];
    if (celula) {
      celula.classList.add("dia-atual");
    }
  });
});
