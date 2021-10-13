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

function search() {
  var searchterm = document.getElementById('inputSearch').value;

  if (searchterm !== "") {
    let themovies = document.getElementById('frontpage-movies')

    let searchResults = [];

    Array.from(themovies.children).forEach(function (movie) {
      const movietitle = movie.querySelectorAll(".card-title");

      Array.from(movietitle).forEach(function (title) {
        let found = title.textContent.toLowerCase().includes(searchterm.toLowerCase());
        if (found) {
          searchResults.push(movie);
        }
      });
    });

    if (searchResults.length > 0) {
      themovies.innerHTML = ``;
      searchResults.forEach(function (movie) {
        themovies.innerHTML = themovies.innerHTML.concat('<div class="col-md-4">' + movie.innerHTML + "</div>");
      });
    } else {
      themovies.innerHTML = `<p>Er zijn geen films die aan je zoekterm voldoen.</p>`;
    }
    document.getElementById("inputSearch").value = "";
  }
}


