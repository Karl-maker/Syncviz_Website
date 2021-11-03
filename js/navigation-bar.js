const MOBILESIDEBARWIDTH = 50;
const DESKTOPSIDEBARWIDTH = 15;
let isNavBarOpen = false;

const toggleNavBar = () => {
  if (isNavBarOpen) {
    closeNavBar();
  } else {
    openNavBar();
  }
};

const openNavBar = () => {
  let deviceWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

  //For Mobile Devices to not push body
  if (deviceWidth >= 600) {
    document.getElementById("side-nav").style.width = `${DESKTOPSIDEBARWIDTH}%`;
    document.getElementById(
      "body-content"
    ).style.marginLeft = `${DESKTOPSIDEBARWIDTH}%`;
  } else {
    document.getElementById("side-nav").style.width = `${MOBILESIDEBARWIDTH}%`;
    document.getElementById("body-content").style.marginLeft = `${0}%`;
  }
  isNavBarOpen = true;
};

const closeNavBar = () => {
  document.getElementById("side-nav").style.width = `${0}`;
  document.getElementById("body-content").style.marginLeft = `${0}`;
  isNavBarOpen = false;
};
