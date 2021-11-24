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
  "<li onClick='toggleNavBar()' class='close' style='margin-bottom: 3em'>" +
  "<svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' fill='currentColor' class='bi bi-x-square-fill' viewBox='0 0 16 16'>" +
  "<path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z'/>" +
  "</svg>  Close Bar</li>" +
  "<li><a href='#'>Scenes</a></li>" +
  "<li><a href='#'>Create</a></li>" +
  "<li id='learn-more'><a href='#'>Learn</a></li>" +
  "<li><a href='contact.html'>Contact</a></li>" +
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
  "<h1>Syncviz</h1>" +
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
  "<p>The Syncviz Company</p>" +
  "</div>" +
  "<p>© 2021 Syncviz, by Karl-Johan Bailey 2018121008.</p>" +
  "</div>";

document.getElementById("header").innerHTML = HEADER_CONTENT;
document.getElementById("footer").innerHTML = FOOTER_CONTENT;
