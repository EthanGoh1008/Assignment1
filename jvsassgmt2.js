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

function redirectToIndex2() {
  window.location.href = "index2.html";
}
