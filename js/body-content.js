/*
body-content populates all pages with one header, nav and footer by injecting HTML into the DOM

Header {
	Navigation
}
Footer {

}

*/

const HEADER_CONTENT =
  "<div class='header-left-hand'>" +
  "<div id ='header-nav-button'>" +
  "<img src='img/icons/3-bars-icon.png' />" +
  "</div>" +
  "<a href='index.html'>" +
  "<img src='img/logos/logo192.png' />" +
  "<h3>Syncviz</h3>" +
  "</a>" +
  "</div>" +
  "<div class='header-right-hand'>" +
  "<button>Learn More</button>" +
  "<a href='https://github.com/Karl-maker?tab=repositories'>" +
  "<div id='github-button'><img src='img/icons/github.png' /></div>" +
  "</a>" +
  "</div>";

const NAVIGATION_CONTENT = "";

const FOOTER_CONTENT =
  "<div class='footer-center'>" +
  "<div class='footer-logo'>" +
  "<img src='img/logos/logo192.png' />" +
  "<h4>The Syncviz Company</h4>" +
  "</div>" +
  "<p>© 2021 Syncviz, by Karl-Johan Bailey 2018121008.</p>" +
  "</div>";

document.getElementById("header").innerHTML = HEADER_CONTENT;
document.getElementById("footer").innerHTML = FOOTER_CONTENT;
document.getElementById("navigation").innerHTML = NAVIGATION_CONTENT;
