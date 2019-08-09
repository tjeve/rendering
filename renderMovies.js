
function renderMovies(movies) {

    function movieCards (movieData) {
        return `<div class="whole-card">
                    <div class="poster"><img class="poster" src="${movieData.poster} width="20px"></div>
                    <div class="card-info">
                        <div class="one">
                            <div class="title"><a style="color: black" href="http://www.imdb.com/title/${movieData.imdbID}">${movieData.title}</a></div>
                            <div class="year">${movieData.year}</div>
                        </div>
                        <div class="two">
                            <div class="in-card">IMDB:</div>
                            <div class="in-card">${movieData.imdbRating} / 10</div>
                        </div>
                        <div class="three">
                            <div class="in-card">Rotten Tomatoes:</div>
                            <div class="in-card">${movieData.rottenTomatoesRating * 100}%</div>
                        </div>
                    </div>
                </div>`
    }

    let movieScores = movies.map(movieCards).join('')

    return `
        <div class="text-center mt-5">
            ${movieScores}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}