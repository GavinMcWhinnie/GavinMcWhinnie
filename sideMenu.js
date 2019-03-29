
var sideMenuShown = false;

function sideMenu(action) {
  var sideMenu = document.getElementsByTagName('aside')[0];
  console.log(action);
  if (action == 'toggle') {
    if (sideMenuShown) {
      sideMenuShown = false;
      sideMenu.className= 'asideHide';

    } else {
      sideMenuShown = true;
      sideMenu.className= 'asideShow';
    }
  } else if (action == 'hide') {
    if (sideMenuShown){
      sideMenuShown = false;
      sideMenu.className= 'asideHide';
    }
  }
}
