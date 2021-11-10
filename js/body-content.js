/*
body-content populates all pages with one header, nav and footer by injecting HTML into the DOM

Header {
	Navigation
}
Footer {

}

*/

const NAVIGATION_CONTENT =
  "<div class='side-nav' id='side-nav'>" +
  "<nav>" +
  "<ul>" +
  "<li onClick='toggleNavBar()' class='close' style='margin-bottom: 3em'>Close Bar</li>" +
  "<li><a href='#'>Scenes</a></li>" +
  "<li><a href='#'>Create</a></li>" +
  "<li id='learn-more'><a href='#'>Learn</a></li>" +
  "<li><a href='#'>Contact</a></li>" +
  "</ul>" +
  "</nav>" +
  "</div>";

const HEADER_CONTENT =
  "<div class='header-left-hand'>" +
  "<div id ='header-nav-button' onClick='toggleNavBar()'>" +
  "<img src='img/icons/3-bars-icon.png' />" +
  "</div>" +
  "<a href='index.html'>" +
  "<img src='img/logos/logo192.png' />" +
  "<h3>Syncviz</h3>" +
  "</a>" +
  "</div>" +
  NAVIGATION_CONTENT +
  "<div class='header-right-hand'>" +
  "<button>Learn More</button>" +
  "<a href='https://github.com/Karl-maker?tab=repositories'>" +
  "<div id='github-button'><img src='img/icons/github.png' /></div>" +
  "</a>" +
  "</div>";

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
