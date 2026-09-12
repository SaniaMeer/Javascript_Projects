let movieInput = document.getElementById('movie-input');
let searchBtn = document.getElementById('search-btn');
let movieCard = document.getElementById('movie-card');
let moviePoster = document.getElementById('movie-poster');
let movieTitle = document.getElementById('movie-title');
let movieRating = document.getElementById('movie-rating');
let movieYear = document.getElementById('movie-year');
let movieGenre = document.getElementById('movie-genre');
let movieActors = document.getElementById('movie-actors');
let moviePlot = document.getElementById('movie-plot');

async function fetchData(value) {
    const url = `https://www.omdbapi.com/?t=${value}&apikey=810473d0`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);
        movieTitle.innerHTML = data.Title
        moviePoster.src = data.Poster
        movieRating.innerHTML = data.Ratings[0].Value // ratings is an array of rating objects so [0] accesses the first rating and .Value gets its rating value
        movieYear.innerHTML = data.Year
        movieGenre.innerHTML = data.Genre
        movieActors.innerHTML = data.Actors
        moviePlot.innerHTML = data.Plot
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

searchBtn.addEventListener('click', () => {
    let value = movieInput.value
    fetchData(value);
    movieInput.value = ""
});
