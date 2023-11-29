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

function displayDiv(thumbnailId) {
  // Hide all detail divs
  var detailDivs = document.getElementsByClassName("image-details");
  for (var i = 0; i < detailDivs.length; i++) {
    detailDivs[i].style.display = "none";
  }

  // Show the selected detail div
  var selectedDetailDiv = document.getElementById("detail_" + thumbnailId);
  if (selectedDetailDiv) {
    selectedDetailDiv.style.display = "block";
  }
}

function redirectToIndex2() {
  window.location.href = "index2.html";
}
