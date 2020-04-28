// console.log(data.js);
const moviesContainer = document.querySelector('.movies-container');


document.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movieArray) {
        const moviesHtmlArray = movieArray.map(movie => {
            return `<div class="movie">
            <div class="card" style="width: 18rem;">
              <img src="${movie.Poster}" class="movie-poster" alt="...">
              <div class="card-body">
                <h5 class="movie-title">${movie.Title}</h5>
                <p class="release-date">${movie.Year}</p>
                <a href="#" class="btn btn-primary">Add</a>
              </div>
            </div>
          </div>`

        })
        return moviesHtmlArray.join('');




    }
    
    moviesContainer.innerHTML = renderMovies(movieData);
    
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function (e) {
        // event listener code goes here
    })
    // code here will execute after the document is loaded
});
