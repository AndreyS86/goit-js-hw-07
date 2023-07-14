import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryUlLb = document.querySelector(".gallery");
const markupLb = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

galleryUlLb.insertAdjacentHTML("beforeend", markupLb);
galleryUlLb.addEventListener("click", handleShow);

function handleShow(e) {
    e.preventDefault()
}

var  Lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
