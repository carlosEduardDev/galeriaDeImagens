const imagens = document.querySelectorAll("img");
const buttonFecharModal = document.querySelector(".filter button");
const modal = document.querySelector(".modal");
const modalFilter = document.querySelector(".filter");
const botaoNext = document.querySelector(".next");
const botaoPrev = document.querySelector(".prev");

let modalImg = document.querySelector(".modalImg");
let total = imagens.length - 1;
let current = 0;

imagens.forEach(function (img, index) {
  img.addEventListener("click", () => {
    modalOpen(img, index);
    current = index;
  });
});

function modalOpen(img, index) {
  modal.classList.add("ativo");
  modalFilter.classList.add("ativo");
  modalImg.src = img.src;
}


function preload() {
  const preload = document.querySelector(".preload");
  const h1 = document.querySelector("h1");
  const circle1 = document.querySelector(".circle1");
  const circle2 = document.querySelector(".circle2");
  circle1.style.animation =
    "fade1 .5s linear forwards, rotate1 1s linear infinite";
  preload.style.animation = "fade1 1s linear forwards";
  circle2.style.animation =
    "fade1 .5s linear forwards, rotate1 1.5s ease infinite";
  imagens.forEach((img) => {
    img.style.animation = "fade2 1.5s linear forwards";
    h1.style.animation = "scale 1s 1 .5s forwards";
  });
}

function fecharModal() {
  modal.classList.remove("ativo");
  modalFilter.classList.remove("ativo");
  current = 0;
}

function changeImageModal() {
  modalImg.src = imagens[current].src;
  modalImg.classList.add("active");
}

function nextImg() {
    current = current >= total ? 0 : current + 1;
    changeImageModal();
}

function prevImg() {
    current = current === 0 ? current + total : current - 1;
    changeImageModal();
}

window.addEventListener("load", preload);
imagens.forEach(function (img, index) {
  img.addEventListener("click", () => {
    modalOpen(img, index);
    current = index;
  });
});
buttonFecharModal.addEventListener("click", fecharModal);
botaoNext.addEventListener("click", nextImg);
botaoPrev.addEventListener("click", prevImg);

console.log(current)