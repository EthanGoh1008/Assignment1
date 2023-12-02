// this code displays a certain index depending on the image clicked//
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
//hides all of images//
function hideAllImages() {
  const images = document.querySelectorAll(".thumbnailsall img");
  images.forEach((img) => (img.style.display = "none"));
}
//finds index based on class of image//
function showImages(className) {
  const imagesToShow = document.querySelectorAll(`.${className}`);
  imagesToShow.forEach((img) => (img.style.display = "block"));
}
//review section//
document.addEventListener("submit", function (event) {
  event.preventDefault();

  let usrName = document.getElementById("txtName").value;
  let carDropdown = document.getElementById("carDropdown");
  let selectedCar = carDropdown.options[carDropdown.selectedIndex].text;
  let txtReview = document.getElementById("txtReview").value;

  let reviewList = [];

  if (localStorage.getItem("reviewList") !== null) {
    reviewList = JSON.parse(localStorage.getItem("reviewList"));
  }

  let newReview = new Review(usrName, selectedCar, txtReview);
  reviewList.push(newReview);
  localStorage.setItem("reviewList", JSON.stringify(reviewList));

  document.getElementById("myFrm").reset();

  refreshReviewTable();
});

function Review(usrName, selectedCar, txtReview) {
  this.id = Date.now();
  this.name = usrName;
  this.car = selectedCar;
  this.review = txtReview;
}
//updates any reviews that are added to the website
function refreshReviewTable() {
  let reviewTable = document.getElementById("review-table-body");
  let reviewList = [];
  let reviewData = "";

  if (localStorage.getItem("reviewList") !== null) {
    reviewList = JSON.parse(localStorage.getItem("reviewList"));

    for (let review of reviewList) {
      reviewData += `<tr><td>${review.name}</td><td>${review.car}</td><td>${review.review}</td></tr>`;
    }

    reviewTable.innerHTML = reviewData;
  }
}
//resets the comments that have been added
function clearResponses() {
  localStorage.removeItem("reviewList");
}
