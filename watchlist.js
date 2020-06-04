document.addEventListener("DOMContentLoaded", function () {
    const moviesContainer = document.querySelector('.movies-container');
    const savedMovies = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(savedMovies);
    function renderMovies(movieArray) {
        // console.log(movieArray);
        const moviesHtmlArray = movieArray.map(movie => {
            return `<div class="movie">
            <div class="card" style="width: 18rem;">
              <img src="${movie.Poster}" class="movie-poster" onerror="if (this.src != 'no_image.png') this.src='assets/no_image.png';" alt="Card image cap">
              <div class="card-body">
                <h5 class="movie-title">${movie.Title}</h5>
                <p class="release-date">${movie.Year}</p>
              </div>
            </div>
          </div>`

        })
        return moviesHtmlArray.join('');
    };
    moviesContainer.innerHTML = renderMovies(watchlist);



})