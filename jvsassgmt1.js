// Linking all original images to index2.html
function redirectToIndex2() {
  window.location.href = "index2.html";
}

// Function to create an image element with a click event listener
function createImage(src, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = 350;
  img.alt = alt;
  img.addEventListener("click", function () {
    window.location.href = "index2.html";
  });
  return img;
}

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
      thumbnailsContainer.appendChild(
        createImage(thumbnail.src, thumbnail.alt)
      );
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
    thumbnailsContainer.appendChild(createImage(thumbnail.src, thumbnail.alt));
  });
}

// Function to change the layout based on the popular order
function changeLayout() {
  var thumbnailsContainer = document.getElementById("ThumbnailsPopular");

  // Remove existing images
  while (thumbnailsContainer.firstChild) {
    thumbnailsContainer.removeChild(thumbnailsContainer.firstChild);
  }

  // Append images in the popular order
  popularThumbnailsOrder.forEach(function (thumbnailSrc, index) {
    thumbnailsContainer.appendChild(
      createImage(thumbnailSrc, "Thumbnail" + (index + 1))
    );
  });
}

// Attach event listeners to the buttons
document
  .getElementById("reverseButton")
  .addEventListener("click", reverseOrder);
document.getElementById("resetButton").addEventListener("click", resetOrder);

function rearrangeImages() {
  var container = document.getElementById("Thumbnailsrecent");
  var imageOrder = [
    "Nissan R32.jpg",
    "Mclaren F1.jpg",
    "Keiichi Tsuchiya.jpg",
    "Pagani.jpg",
    "Honda NSX.jpg",
    "Mitsubishi Evo.jpg",
    "Mercedes CLK GTR.jpg",
    "Porsche 930 911.jpg",
    "Dodge Viper.jpg",
    "Nissan R35.jpg",
    "Lexus LFA.jpg",
    "Mazda Rotary.jpg",
    "BMW E30 M3.jpg",
    "Toyota 22R.jpg",
    "Vector W8.jpg",
    "Corvette.jpg",
  ];

  // Remove existing images
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Append images in the specified order
  imageOrder.forEach(function (imageSrc, index) {
    var img = createImage(imageSrc, "Tn" + (index + 1));
    container.appendChild(img);
  });
}

// Add click event listener to the original images in the recent section
originalThumbnails.forEach(function (thumbnail) {
  thumbnail.addEventListener("click", function () {
    window.location.href = "index2.html";
  });
});

// Add click event listener to the images in the recent section on page load
var recentImages = document
  .getElementById("Thumbnailsrecent")
  .getElementsByTagName("img");

for (var i = 0; i < recentImages.length; i++) {
  recentImages[i].addEventListener("click", function () {
    window.location.href = "index2.html";
  });
}
