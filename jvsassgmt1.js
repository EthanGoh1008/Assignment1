for (let i = 1; i <= 16; i++) {
  window["redirectToIndex" + i] = function () {
    window.location.href = "index" + i + ".html";
  };
}

function showAll() {
  showImages("thumbnailsalltn");
}

function showPopular() {
  hideAllImages();
  showImages("populartn");
}

function showRecent() {
  hideAllImages();
  showImages("recenttn");
}

function hideAllImages() {
  const images = document.querySelectorAll(".thumbnailsall img");
  images.forEach((img) => (img.style.display = "none"));
}

function showImages(className) {
  const imagesToShow = document.querySelectorAll(`.${className}`);
  imagesToShow.forEach((img) => (img.style.display = "block"));
}
