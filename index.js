const moviesContainer = document.querySelector('.movies-container');

function saveToWatchList(imdbID) {
  const movie = movieData.find(function (currentMovie) {
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
            <div class="card" style="width: 18rem;">
              <img src="${movie.Poster}" class="movie-poster" alt="...">
              <div class="card-body">
                <h5 class="movie-title">${movie.Title}</h5>
                <p class="release-date">${movie.Year}</p>
                <button onclick="saveToWatchList('${movie.imdbID}')">Add to Watchlist</button>
              </div>
            </div>
          </div>`

    })
    return moviesHtmlArray.join('');




  }


  const myForm = document.getElementById('search-form');
  myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchString = document.getElementById(‘search-bar’).value;

    moviesContainer.innerHTML = renderMovies(movieData);
  })

})