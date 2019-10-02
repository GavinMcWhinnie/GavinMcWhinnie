
var count = 0;
var page = null;

function updateFade() {
  if (count > 100) {
    clearInterval(fadeInterval);
    window.location = page;
    count = 0;
  } else {
    count += 1
    document.getElementsByTagName('body')[0].style.opacity = (1 - count/100);
  }
}
function goToPage(newPage) {
  page = newPage;
  fadeInterval = setInterval(updateFade,5);
}
