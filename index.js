const moviesContainer = document.querySelector('.movies-container');
let movieDataArray
function saveToWatchList(imdbID) {
  const movie = movieDataArray.find(function (currentMovie) {
    return currentMovie.imdbID == imdbID;
  });
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist == null) {
    watchlist = [];
  }
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem('watchlist', watchlistJSON);

}
document.addEventListener("DOMContentLoaded", function () {
  function renderMovies(movieArray) {
    const moviesHtmlArray = movieArray.map(movie => {
      return `<div class="movie">
            <div class="card" style="width: 18rem; height: 65%"">
              <img class="card-img-top w-100 h-100" src="${movie.Poster}" class="movie-poster" onerror="if (this.src != 'no_image.png') this.src='/no_image.png';" alt="Card image cap">
              <div class="card-body d-flex flex-column justify-content-between align-items-center p-0 pt-2 m-0 overflow-auto" style="height: 27%"">
                <h5 class="movie-title text-center m-0 p-0 font-weight-bold">${movie.Title}</h5>
                <p class="release-date dropdown d-flex align-items-center m-0 p-0 pt-2">${movie.Year}</p>
                <button onclick="saveToWatchList('${movie.imdbID}')">Add to Watch list</button>
              </div>
            </div>
          </div>`

    })
    return moviesHtmlArray.join('');




  }


  const myForm = document.getElementById('search-form');
  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let searchString = document.getElementsByClassName('search-bar')[0].value;
    console.log(searchString);
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get("https://www.omdbapi.com/?apikey=199ebac6&s=" + urlEncodedSearchString)
      .then(response => {
        movieDataArray = response.data.Search;
        console.log(movieDataArray);
        moviesContainer.innerHTML = renderMovies(movieDataArray);

      })

  })

})