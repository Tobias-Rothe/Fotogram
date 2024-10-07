let arrayImg = [
  "./img/0.jpg",
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./img/11.jpg",
];
let currentImg = 0;
let activIndex = 0;
function renderImg() {
  let content = document.getElementById("content");

  for (let i = 0; i < arrayImg.length; i++) {
    content.innerHTML += /*html*/ `
        <img onclick="openModal('./img/${i}.jpg',${i})"  class="img-bike" id="id${i}"  src="${arrayImg[i]}" alt="">
    `;
  }
}
function openModal(path, index) {
  activIndex = index;
  let lightbox = document.getElementById("lightbox");
  let lightboxclass = document.getElementById("lightbox-container");
  lightboxclass.classList.remove("d-none");

  lightbox.innerHTML = /*html*/ `
     <img class="big-style" src=" ${path}" alt="">
   `;
}

function back() {
  let lightbox = document.getElementById("lightbox");
  activIndex--;
  if (activIndex < 0) {
    activIndex = arrayImg.length - 1;
  }
  lightbox.innerHTML = /*html*/ `
<img class="big-style" src=" ${arrayImg[activIndex]} " alt="">
`;
}

function closeLightBox() {
  let lightboxclass = document.getElementById("lightbox-container");

  lightboxclass.classList.add("d-none");
}
function  next() {
  let lightbox = document.getElementById("lightbox");
  activIndex++;
  if (activIndex > arrayImg.length -1) {
activIndex = 0;

    
  }
  lightbox.innerHTML = /*html*/ `
  <img class="big-style" src=" ${arrayImg[activIndex]} " alt="">
  `;

}