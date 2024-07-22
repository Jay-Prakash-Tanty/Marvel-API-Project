const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');


function suggestMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

async function loadMovies(searchTerm){
    let URL = `https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=30&filter=title%3D${searchTerm}`;
    let res = await fetch(`${URL}`);
    let Data = await res.json();
    console.log(Data.data);
    displayMovieList(Data.data);
}



function displayMovieList(data){
    searchList.innerHTML = "";
    for(let idx = 0; idx < data.length ; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = data[idx].id; 
        movieListItem.classList.add('search-list-item');
        if(data[idx].cover_url != "N/A")
            moviePoster = data[idx].cover_url;
        else 
            moviePoster = "Marvel Logo.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${data[idx].title}</h3>
            <p>${data[idx].release_date}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(data => {
        data.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`https://mcuapi.herokuapp.com/api/v1/movies/${data.dataset.id}`);
            const movieDetails = await result.json();
            displayMovieDetails(movieDetails);
        });
    });
}

function displayMovieDetails(details){
    resultGrid.innerHTML = `
    
    <div class = "movie-info">
        <h3 class = "movie-title">${details.title}</h3>
        
        <p class = "director"><b>director:</b> ${details.directed_by}</p>
        <p class = "duration"><b>duration:</b> ${details.duration}</p>
        <p class = "collection"><b>collection: </b>${details.box_office} $</p>
        <p class = "overview"><b>overview:</b> ${details.overview}</p>
        <br>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.release_date}</li>
            <li class = "phase">phase: ${details.phase}</li>
            <li class = "chronology">chronology: ${details.chronology}</li>
        </ul>
       
    </div>
    <div class = "movie-poster">
        <img src = "${(details.cover_url != "N/A") ? details.cover_url : "Marvel Logo.png"}" alt = "movie poster">
    </div>
    `;
}


window.addEventListener('click', (event) => {
    if(event.target.className != "movies-input"){
        searchList.classList.add('hide-search-list');
    }
});