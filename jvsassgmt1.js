// Create a copy of the original thumbnails when the page loads
var originalThumbnails = Array.from(
  document.getElementById("Thumbnailsrecent").getElementsByTagName("img")
);

function reverseOrder() {
  var thumbnailsContainer = document.getElementById("Thumbnailsrecent");

  // Remove existing images
  while (thumbnailsContainer.firstChild) {
    thumbnailsContainer.removeChild(thumbnailsContainer.firstChild);
  }

  // Append reversed images
  originalThumbnails
    .slice()
    .reverse()
    .forEach(function (thumbnail) {
      thumbnailsContainer.appendChild(thumbnail.cloneNode(true));
    });
}

function resetOrder() {
  var thumbnailsContainer = document.getElementById("Thumbnailsrecent");

  // Remove existing images
  while (thumbnailsContainer.firstChild) {
    thumbnailsContainer.removeChild(thumbnailsContainer.firstChild);
  }

  // Append original order images
  originalThumbnails.forEach(function (thumbnail) {
    thumbnailsContainer.appendChild(thumbnail.cloneNode(true));
  });
}

// Attach event listeners to the buttons
document
  .getElementById("reverseButton")
  .addEventListener("click", reverseOrder);
document.getElementById("resetButton").addEventListener("click", resetOrder);
