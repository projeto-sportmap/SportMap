const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Abrir modal
openModal.onclick = function () {
  modal.style.display = "flex";

  // Bloqueia a rolagem da página
  document.body.style.overflow = "hidden";
};

// Fechar modal
closeModal.onclick = function () {
  modal.style.display = "none";

  // Libera a rolagem da página
  document.body.style.overflow = "";
};

// Fechar clicando fora
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";

    // Libera a rolagem
    document.body.style.overflow = "";
  }
};
