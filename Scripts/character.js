// const publicKey = '705d91f0b752751608085d8bd3da3fe2';
// const privateKey = '810e65fe1aab5d8f8b7521d04b79967c51d02a84';

const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=705d91f0b752751608085d8bd3da3fe2&hash=10d96edf8082f8797acbb2bca03664b0';

const baseUrl = "https://gateway.marvel.com/v1/public/characters";

const key = "ts=1&apikey=705d91f0b752751608085d8bd3da3fe2&hash=10d96edf8082f8797acbb2bca03664b0";

let input = document.getElementById("search-text");

document.addEventListener("load", fetchdata("")); 

function reload() {
  window.location.reload();
}

function search(){
  fetchdata(input.value);
}

async function fetchdata(input) {
  if(input == ""){
  console.log('fetching data...');
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  binddataShow(data.data.results);
}
else {
  const query = `name=${input.replace(/ /g, "%20")}`
  const res = await fetch(`${baseUrl}?${query}&${key}`);
  console.log(query);
  const data = await res.json();
  console.log(data);
  binddata(data.data.results);
  input.value = "";
}
}

function binddataShow(datas) {
  const cardsContainer = document.getElementById('card-container')
  const CardTemplate = document.getElementById('template-char-card')

  cardsContainer.innerHTML = "";

  datas.forEach((data) => {
    const regex = /^http:\/\/i\.annihil\.us\/u\/prod\/marvel\/i\/mg\/.*\/image_not_available$/;
    if(regex.test(data.thumbnail.path)) {
      return;
    };
    const cardClone = CardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, data);
    cardsContainer.appendChild(cardClone);
  });
  
  function fillDataInCard(cardClone, data) {
    const charImg = cardClone.querySelector('#char-img');
    const charName = cardClone.querySelector('#char-name');
    const charDesc = cardClone.querySelector('#char-description');
    charImg.src = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
    charName.innerHTML = data.name;
    charDesc.innerHTML = data.description;
    if(data.description == ""){
      charDesc.innerHTML = "No Description Found";
    }
    cardClone.firstElementChild.addEventListener('click', () =>{
      window.open(data.resourceURI, '_blank');
    });
  };
}

function binddata(datas) {
  const cardsContainer = document.getElementById('card-container')
  const CardTemplate = document.getElementById('template-char-card')

  cardsContainer.innerHTML = "";

  datas.forEach((data) => {
    // const regex = /^http:\/\/i\.annihil\.us\/u\/prod\/marvel\/i\/mg\/.*\/image_not_available$/;
    // if(regex.test(data.thumbnail.path)) {
    //   return;
    // };
    const cardClone = CardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, data);
    cardsContainer.appendChild(cardClone);
  });
  
  function fillDataInCard(cardClone, data) {
    const charImg = cardClone.querySelector('#char-img');
    const charName = cardClone.querySelector('#char-name');
    const charDesc = cardClone.querySelector('#char-description');
    charImg.src = `${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`;
    charName.innerHTML = data.name;
    charDesc.innerHTML = data.description;
    if(data.description == ""){
      charDesc.innerHTML = "No Description Found";
    }
    cardClone.firstElementChild.addEventListener('click', () =>{
      window.open(data.resourceURI, '_blank');
    });
  };
}