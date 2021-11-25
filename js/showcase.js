var list = [
  {
    image: "pexels-tom-swinnen-2249961.jpg",
    title: "Art Of The World",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor morbi non arcu. Risus pretium quam vulputate dignissim suspendisse in.",
  },
  {
    image: "pexels-photo-7577881.jpeg",
    title: "Animation Competition 2020",
    content:
      "Ipsum a arcu cursus vitae congue mauris rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Suscipit tellus mauris a diam maecenas sed.",
  },
];
var num = 1;

window.setInterval(switchImage, 5000);

function switchImage() {
  if (num > list.length - 1) num = 0;

  document.getElementById(
    "main-background"
  ).style.backgroundImage = `url('./img/content/${list[num].image}')`;

  document.getElementById(
    "title"
  ).innerHTML = `<strong>${list[num].title}</strong>`;

  document.getElementById("content").innerHTML = list[num].content;

  num++;
}
