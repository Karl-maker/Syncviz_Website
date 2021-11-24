const ARTICLE_1 =
  "<div class='karl'>" +
  "<img src='./img/content/karl-johanbailey.jpg' />" +
  "<h4>Karl-Johan Bailey</h4>" +
  "<p>Head artist at Syncviz, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" +
  "</div>";

const ARTICLE_2 =
  "<div class='karl'>" +
  "<img src='./img/content/pexels-cottonbro-cgi-8817533.png' />" +
  "<h4>An Animation Studio</h4>" +
  "<p>Get animation done with Syncviz today!</p>" +
  "</div>";

var isfirstArticle = true;
document.getElementById("second-article").innerHTML = ARTICLE_1;
window.setInterval(changeContent, 10000);

function changeContent() {
  if (isfirstArticle) {
    isfirstArticle = false;
    document.getElementById("second-article").innerHTML = ARTICLE_2;
  } else {
    isfirstArticle = true;
    document.getElementById("second-article").innerHTML = ARTICLE_1;
  }
}
