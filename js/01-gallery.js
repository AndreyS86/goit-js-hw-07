import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
  }).join("");
}

galleryUl.insertAdjacentHTML("beforeend", markup);
galleryUl.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery-image")) {
    return;
  }
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`
         <img src="${e.target.dataset.source}" width="800" height="600">`);
  instance.show();
};