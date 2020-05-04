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
            <div class="card" style="width: 18rem;">
              <img src="${movie.Poster}" class="movie-poster" alt= img src="no_image.png">
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
    let searchString = document.getElementsByClassName('search-bar')[0].value;
    console.log(searchString);
    const urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get("http://www.omdbapi.com/?apikey=199ebac6&s=" + urlEncodedSearchString)
      .then(response => {
        movieDataArray = response.data.Search;
        console.log(movieDataArray);
        moviesContainer.innerHTML = renderMovies(movieDataArray);
      
      })

  })

})