for (let i = 1; i <= 16; i++) {
  window["redirectToIndex" + i] = function () {
    window.location.href = "index" + i + ".html";
  };
}
