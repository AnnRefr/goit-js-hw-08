// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';

const sellectGallery = document.querySelector(".gallery");

sellectGallery.insertAdjacentHTML("beforeend", createImgCard(galleryItems));

function createImgCard() {
  return galleryItems
    .map(({ preview, original, description }) => {
      sellectGallery.addEventListener("click", galleryCardClick);
      return `
                <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}"
                data-source="${original}"
                alt="${description}"/></a></div>`;
    })
    .join("");
}

function galleryCardClick(e) {
  e.preventDefault();
}
sellectGallery.onclick = () => {
  simpleLightbox
  .create(
    `
  <img src="${event.target.dataset.source}">`
  )
  .show();
};

let lightbox = new simpleLightbox(".gallery a", {
  captions: 'true',
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);