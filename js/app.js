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
    console.log('zoekterm = ' + searchterm);

    let themovies = document.getElementById('frontpage-movies')

    console.log("Lijst van filmtitels:");
    console.log(themovies);
    
    const titles = themovies.querySelectorAll(".card-title");
    console.log(titles)
    Array.from(titles).forEach(function (title) {
      console.log(title.textContent); 
    });

    let searchResults = [];

    console.log("Filter de lijst:");
    Array.from(themovies.children).forEach(function (movie) {
      const movietitle = movie.querySelectorAll(".card-title");


      Array.from(movietitle).forEach(function (title) {
        console.log(title.textContent.toLowerCase());
        let found = title.textContent.toLowerCase().includes(searchterm.toLowerCase());
        if (found) {
          console.log("Yes, gevonden: " + title.textContent);
          searchResults.push(movie);
        }
      });

    });

    if (searchResults.length > 0) {
      console.log(`Er zijn ${searchResults.length} resultaten`);

      themovies.innerHTML = ``;
      searchResults.forEach(function (movie) {
        themovies.innerHTML = themovies.innerHTML.concat('<div class="col-md-4">' + movie.innerHTML + "</div>");
      });


    } else {
      console.log("Helaas niet gevonden");
      themovies.innerHTML = `<p>Er zijn geen films die aan je zoekterm voldoen.</p>`;
    }

    document.getElementById("inputSearch").value = "";
  }
}


