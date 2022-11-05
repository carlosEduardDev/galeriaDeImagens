// declaração Variaveis

const imagens = document.querySelectorAll("main img");
const fecharModal = document.querySelector("#fecharModal");
const modal = document.querySelector(".Modal");
const filtro = document.querySelector(".filtro");
const botaoNext = document.querySelector("#next");
const botaoPrev = document.querySelector("#prev");

let modalImg = document.querySelector(".imgModal");
let modalText = document.querySelector("#Modal p");
let total = imagens.length - 1;
let current = 0;

// Eventos

fecharModal.addEventListener("click", desativarModal);

function desativarModal() {
  filtro.classList.remove("active");
  current = 0;
}

function abrirModal(img, index) {
  filtro.classList.add("active");
  modalImg.classList.add("active");
  modalImg.src = img.src;
}

imagens.forEach(function (img, index) {
  img.addEventListener("click", () => {
    abrirModal(img, index);
    current = index;
  });
});

function changeImageModal() {
  modalImg.src = imagens[current].src;
  modalImg.classList.add("active");
}

function imgNext() {
  modalImg.classList.remove("active");
  setTimeout(() => {
    current = current >= total ? 0 : current + 1;
    changeImageModal();
  }, 200);
}

function imgPrev() {
  modalImg.classList.remove("active");
  setTimeout(() => {
    current = current === 0 ? current + total : current - 1;
    changeImageModal();
  }, 200);
}

botaoNext.addEventListener("click", imgNext);
botaoPrev.addEventListener("click", imgPrev);
