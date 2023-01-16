// let container = document.querySelector(".container");
// container.classList.toggle("show");
// let wigth = container.offsetWidth;
// let hight = container.offsetHeight;
// console.log(wigth, hight);
// let domR = container.getBoundingClientRect();
// console.log(domR);
// let wC = container.clientWidth;
// let hC = container.clientHeight;
// console.log(wC, hC);
// let style = getComputedStyle(container);
// console.log(style);
// let ml = parseInt(style.marginLeft);
// console.log(ml);

// 1) Створити массив шляхів до зображень і створити слайдер який переключає кожні 3 секунди картинку,
//  слайдер повинен бути зациклений, коли доходить до кінця массиву починає показувати зображення з початку.
//   Анімації і ефекти до слайдеру по бажанню
// 2) Створити 2 кнопки які при кліку будуть перемикати зображення в слайдері, вперед назад
let images = [
  "./img/черепашки.jpg",
  "./img/batman.jpg",
  "./img/superman.jpg",
  "./img/captain.jpg",
];

let ninjia = document.querySelector("#черепашки");
let batman = document.querySelector("#batman");
let superman = document.querySelector("#superman");
let captain = document.querySelector("#captain");

ninjia.setAttribute("src", images[0]);
batman.setAttribute("src", images[1]);
superman.setAttribute("src", images[2]);
captain.setAttribute("src", images[3]);
let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const sliderNext = document.querySelector(".slider-next");

sliderNext.addEventListener("click", function () {
  offset += 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset -= 256;
  if (offset < 0) {
    offset = 768;
  }
  sliderLine.style.left = -offset + "px";
});
setInterval(function () {
  offset += 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
}, 3000);

// 3) Зробити таймер який відраховує 60секунд і виводить розрахунок на сторінку, а потім відображає
// alert('Ви дочикались знижок) Стилізування за бажанням
let h2 = document.querySelector("h2");
let i = 5;

let id = setInterval(function () {
  i--;
  h2.innerText = i;
  if (i == 0) {
    alert("Ви дочикались знижок");
    clearInterval(id);
  } else {
    console.log(i);
  }
}, 1000);

// 4) Створити кнопку, по натисканню на кнопку повино зявлятись модальне вікно, в модалці повинна
//  бути кнопка закрити вікно. Під модальним вікном повиний бути блок підкладка (на всю ширину сторінки)
//  при кліку на який модальне вікно закривається. За допомгою js задайте left i top щоб вікно було по центру,
//   для цього використайте window.innerWidth  і window.innerHeight а також визначте розміри блоку модального вікна

// let qw = document.getElementById("qw");
// function onclick() {
//   alert("hello brodyaga");
// }
// qw.addEventListener("mouseover", onclick);

// let p = document.querySelector("p");
// p.addEventListener("click", function (event) {
//   this.textContent = "hello brodyaga";
//   console.log("clicked");
//   event.preventDefault();
// });

let jsOpenModal = document.querySelector(".js-open-modal");
let jsOverlayModal = document.querySelector(".js-overlay-modal");
let modal = document.querySelector(".modal");
let jsModalClose = document.querySelector(".js-modal-close");
let wM = modal.clientWidth;
let hM = modal.clientHeight;

function open() {
  modal.style.opacity = "1";
  jsOverlayModal.style.display = "flex";
  console.log(`ширина модалки:${wM}px, висота:${hM}px`);
}
function close() {
  jsOverlayModal.style.display = "none";
  modal.style.opacity = "0";
  console.clear();
}
jsOpenModal.addEventListener("click", open);
jsModalClose.addEventListener("click", close);
jsOverlayModal.addEventListener("click", close);
