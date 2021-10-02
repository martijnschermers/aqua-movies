function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Lees meer";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Lees minder";
    moreText.style.display = "inline";
  }
}

$('.carousel').carousel({
  interval: 3500,
  keyboard: true,
  pause: false,
  ride: "carousel",
  wrap: true
})

function searchMovie() {
  let input = document.getElementById('search').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('movies');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "inline-block";
    }
  }
}