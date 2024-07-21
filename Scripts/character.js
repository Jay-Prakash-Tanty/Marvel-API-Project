const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=705d91f0b752751608085d8bd3da3fe2&hash=10d96edf8082f8797acbb2bca03664b0';
const baseUrl = "https://gateway.marvel.com/v1/public/characters";
const key = "ts=1&apikey=705d91f0b752751608085d8bd3da3fe2&hash=10d96edf8082f8797acbb2bca03664b0";
let input = document.getElementById("search-text");

const loaderContainer = document.querySelector(".loader");

function showLoader() {
    loaderContainer.style.display = 'flex';
}

function hideLoader() {
    loaderContainer.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => fetchdata(""));

function reload() {
    window.location.reload();
}

function search() {
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    const cardsContainer = document.getElementById('card-container');
    cardsContainer.innerHTML = "";
    fetchdata(input.value);
}

async function fetchdata(input) {
    document.querySelector(".loader-1").style.display = 'flex';
    let res;
    try {
        if (input === "") {
            console.log('fetching data...');
            res = await fetch(url);
        } else {
            const query = `name=${encodeURIComponent(input)}`;
            res = await fetch(`${baseUrl}?${query}&${key}`);
            console.log(query);
        }
        const data = await res.json();
        console.log(data);
        document.querySelector("#search-text").value = " ";
        binddataShow(data.data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        document.querySelector(".loader-1").style.display = 'none';
    }
    input.value = "";
}

function binddataShow(datas) {
    const cardsContainer = document.getElementById('card-container');
    const CardTemplate = document.getElementById('template-char-card');

    cardsContainer.innerHTML = "";

    datas.forEach((data) => {
        const regex = /^http:\/\/i\.annihil\.us\/u\/prod\/marvel\/i\/mg\/.*\/image_not_available$/;
        if (regex.test(data.thumbnail.path)) {
            return;
        }
        const cardClone = CardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, data);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, data) {
    const charImg = cardClone.querySelector('#char-img');
    const charName = cardClone.querySelector('#char-name');
    const charDesc = cardClone.querySelector('#char-description');
    charImg.src = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
    charName.innerHTML = data.name;
    charDesc.innerHTML = data.description || "No Description Found";
    cardClone.firstElementChild.addEventListener('click', () => {
        showDetails(data);
    });
}

function showDetails(data) {
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');

    page1.classList.add('hidden');
    page2.classList.remove('hidden');

    const charImg = document.getElementById('pg-2-char-img');
    const charName = document.getElementById('pg-2-char-name');
    const charDesc = document.getElementById('pg-2-char-desc');

    charImg.src = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
    charName.innerHTML = data.name;
    charDesc.innerHTML = data.description || "No Description Found";

    fetchComics(data.id);
    fetchSeries(data.id);
    fetchStories(data.id);
}

function goBack() {
    const page1 = document.getElementById('page-1');
    const page2 = document.getElementById('page-2');

    page1.classList.remove('hidden');
    page2.classList.add('hidden');
}

async function fetchComics(characterId) {
    document.querySelector(".loader-2").style.display = 'flex';
    try {
        const res = await fetch(`${baseUrl}/${characterId}/comics?${key}`);
        const data = await res.json();
        const comicsContainer = document.getElementById('comics-container');
        const ComicTemplate = document.getElementById('template-comic-card');

        comicsContainer.innerHTML = "";

        if (data.data.results.length === 0) {
            comicsContainer.innerHTML = "<p>No Comics Found</p>";
            return;
        }

        data.data.results.forEach((comic) => {
            const comicClone = ComicTemplate.content.cloneNode(true);
            const comicImg = comicClone.querySelector('#comic-img');
            const comicName = comicClone.querySelector('#comic-name');
            comicImg.src = `${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`;
            comicName.innerHTML = comic.title;
            comicsContainer.appendChild(comicClone);
        });
    } catch (error) {
        console.error('Error fetching comics:', error);
    } finally {
        document.querySelector(".loader-2").style.display = 'none';
    }
}

async function fetchSeries(characterId) {
    document.querySelector(".loader-3").style.display = 'flex';
    try {
        const res = await fetch(`${baseUrl}/${characterId}/series?${key}`);
        const data = await res.json();
        const seriesContainer = document.getElementById('series-container');
        const SeriesTemplate = document.getElementById('template-comic-card');

        seriesContainer.innerHTML = "";

        if (data.data.results.length === 0) {
            seriesContainer.innerHTML = "<p>No Series Found</p>";
            return;
        }

        data.data.results.forEach((series) => {
            const seriesClone = SeriesTemplate.content.cloneNode(true);
            const seriesImg = seriesClone.querySelector('#comic-img');
            const seriesName = seriesClone.querySelector('#comic-name');
            seriesImg.src = `${series.thumbnail.path}/standard_xlarge.${series.thumbnail.extension}`;
            seriesName.innerHTML = series.title;
            seriesContainer.appendChild(seriesClone);
        });
    } catch (error) {
        console.error('Error fetching series:', error);
    } finally {
        document.querySelector(".loader-3").style.display = 'none';
    }
}

async function fetchStories(characterId) {
    document.querySelector(".loader-4").style.display = 'flex';
    try {
        const res = await fetch(`${baseUrl}/${characterId}/stories?${key}`);
        const data = await res.json();
        const storiesContainer = document.getElementById('stories-container');
        const StoryTemplate = document.getElementById('template-comic-card');

        storiesContainer.innerHTML = "";

        if (data.data.results.length === 0) {
            storiesContainer.innerHTML = "<p>No Stories Found</p>";
            return;
        }

        data.data.results.forEach((story) => {
            const storyClone = StoryTemplate.content.cloneNode(true);
            const storyName = storyClone.querySelector('#comic-name');
            storyName.innerHTML = story.title || "Untitled";
            storiesContainer.appendChild(storyClone);
        });
    } catch (error) {
        console.error('Error fetching stories:', error);
    } finally {
        document.querySelector(".loader-4").style.display = 'none';
    }
}
