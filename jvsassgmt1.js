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

// Define the popular order of thumbnails
var popularThumbnailsOrder = [
  "popularthumbnail1.jpg",
  "popularthumbnail2.jpg" /* ... */,
];

// Function to change the layout based on the popular order
function changeLayout() {
  var thumbnailsContainer = document.getElementById("ThumbnailsPopular");

  // Remove existing images
  while (thumbnailsContainer.firstChild) {
    thumbnailsContainer.removeChild(thumbnailsContainer.firstChild);
  }

  // Append images in the popular order
  popularThumbnailsOrder.forEach(function (thumbnailSrc) {
    var img = document.createElement("img");
    img.src = thumbnailSrc;
    img.alt = "Thumbnail";
    thumbnailsContainer.appendChild(img);
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
  for (var i = 0; i < imageOrder.length; i++) {
    var img = document.createElement("img");
    img.src = imageOrder[i];
    img.width = 350;
    img.alt = "Tn" + (i + 1);
    container.appendChild(img);
  }
}
