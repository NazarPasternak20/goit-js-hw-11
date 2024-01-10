import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";

const API_KEY = "41748673-2e779d5acf43a6d20c660ff18";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const imageGallery = document.getElementById("image-gallery");
const loader = document.getElementById("loader");

let lightbox;

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") return;

  // loader.classList.add("loading");

  try {
    loader.classList.add("loading");
    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayImages(data.hits);
  } catch (error) {
    showError();
  } finally {
    loader.classList.remove("loading");
  }
});

function displayImages(images) {
  if (images.length === 0) {
    showError();
    return;
  }

  imageGallery.innerHTML = "";
  const imageElements = images.map(image => createImageElement(image));
  imageGallery.append(...imageElements);

  lightbox = new SimpleLightbox('.gallery a', {  });
  lightbox.refresh();
}

function createImageElement(image) {
  const link = document.createElement("a");
  link.href = image.largeImageURL;
  link.setAttribute("data-lightbox", "image-gallery");
  link.innerHTML = `
  <div class="galery-item">
    <img src="${image.webformatURL}" alt="${image.tags}">
    <div class="image-info">
      <div class="img-info-item">
        <p>Likes:</p>
        <p> ${image.likes}</p>
      </div>
      <div class="img-info-item">
        <p>Views: </p>
        <p>${image.views}</p>
      </div>
      <div class="img-info-item">
        <p>Comments: </p>
        <p>${image.comments}</p>
      </div>
      <div class="img-info-item">
        <p>Downloads: </p>
        <p>${image.downloads}</p>
      </div>
    </div>
  </div>
  `;
  return link;
}

function showError() {
  // imageGallery.innerHTML = "";
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
}