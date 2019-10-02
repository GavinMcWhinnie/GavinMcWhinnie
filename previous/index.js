hex_left = document.getElementById('hex_left');
hex_left.style.left = '0%';
hex_right = document.getElementById('hex_right');
hex_right.style.right = '0%';
scroll_button = document.getElementById('scroll');
faded = document.getElementById('faded');



window.onscroll = function () {
  var scroll = window.scrollY;
  scroll_button.style.opacity = 1- (scroll / 200);
  if (scroll < 400) {
    destinationHex = (scroll*30/400);
    faded.style.bottom = -(scroll*45/400) + '%';
  } else {
    destinationHex = 30;
    faded.style.bottom = '-45%';
    faded.style.display = 'none';
    scroll_button.style.display = 'none';
  }
  if (! wait) {
    clearInterval(hexInterval);
    hexInterval = setInterval(updateHex,5);
    currentHex = -(parseFloat(hex_left.style.left));
  }
}

//page transitions
var count = 0;
var hexInterval = null;
var page = null;
var destinationHex = null;
var currentHex = null;
var newPageChange = false;
var wait = true;

function go() {
  wait = false;
}

window.onload = function() {
  setInterval(go,1000);
}

function updateHex() {
  //destination currentHex
  //currently at hex_left.style.left
  if (count > 100) {
    clearInterval(hexInterval);
    if (newPageChange) {
      window.location = page;
    }
    count = 0;
  } else {
    count += 1
    //y =(0.03x^2-0.0002x^3)
    scale = ((0.03*count**2)-(0.0002*count**3))
    hex_left.style.left = -(scale/100*(destinationHex-currentHex)+currentHex) + '%';
    hex_right.style.right = -(scale/100*(destinationHex-currentHex)+currentHex) + '%';

    if (newPageChange) {
      document.getElementsByTagName('body')[0].style.opacity = (1 - count/100);
    }

  }
}
function goToPage(newPage) {
  page = newPage;
  newPageChange = true;
  destinationHex = 30;
  hexInterval = setInterval(updateHex,5);
}

var scrollCount = 0;
var scrollInterval = null;

function updateScroll() {
  if (scrollCount > 100) {
    clearInterval(scrollInterval);
    document.getElementById('scroll').style.display = 'none';
  } else {
    scrollCount += 1;
    var scrollScale = ((0.03*scrollCount**2)-(0.0002*scrollCount**3));
    window.scrollTo(0,scrollScale*4.25);
  }
}

function scrollDown() {
  scrollCount = 0;
  scrollInterval = setInterval(updateScroll, 5);
}
