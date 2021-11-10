// Your code here
fetch("http://localhost:3000/characters")
  .then((resp) => resp.json())
  .then((data) => renderCharacters(data));

const characterBar = document.getElementById("character-bar");
const detailedInfoName = document.getElementById("name");

const span1 = document.createElement("span");
span1.addEventListener('click', handleCuteClick)

const span2 = document.createElement("span");
span2.addEventListener('click', handleMonkeyClick)

const span3 = document.createElement("span");
span3.addEventListener('click', handleZebraClick)

const span4 = document.createElement("span");
span4.addEventListener('click', handleLionClick)

const span5 = document.createElement("span");
span5.addEventListener('click', handlePandaClick)


function renderCharacters(data) {
    console.log(data);
    span1.innerText = data[0].name;
    characterBar.append(span1);

    span2.innerText = data[1].name;
    characterBar.append(span2);

    span3.innerText = data[2].name;
    characterBar.append(span3);

    span4.innerText = data[3].name;
    characterBar.append(span4);

    span5.innerText = data[4].name;
    characterBar.append(span5);
}

const image = document.getElementById("image");

function handleCuteClick(e) {
    e.preventDefault();
    fetch("http://localhost:3000/characters/1")
    .then((resp) => resp.json())
    .then((data) => detailedInfoName.innerText = data.name)

    fetch("http://localhost:3000/characters/1")
    .then((resp) => resp.json())
    .then((data) => image.src = data.image)
}

function handleMonkeyClick(e) {
    e.preventDefault();
    fetch("http://localhost:3000/characters/2")
    .then((resp) => resp.json())
    .then((data) => detailedInfoName.innerText = data.name);

    fetch("http://localhost:3000/characters/2")
    .then((resp) => resp.json())
    .then((data) => image.src = data.image)
  }

function handleZebraClick(e) {
    e.preventDefault();
    fetch("http://localhost:3000/characters/3")
    .then((resp) => resp.json())
    .then((data) => detailedInfoName.innerText = data.name);

    fetch("http://localhost:3000/characters/3")
    .then((resp) => resp.json())
    .then((data) => image.src = data.image)
  }

function handleLionClick(e) {
    e.preventDefault();
    fetch("http://localhost:3000/characters/4")
    .then((resp) => resp.json())
    .then((data) => detailedInfoName.innerText = data.name);

    fetch("http://localhost:3000/characters/4")
    .then((resp) => resp.json())
    .then((data) => image.src = data.image)
  }

function handlePandaClick(e) {
  e.preventDefault();
  fetch("http://localhost:3000/characters/5")
    .then((resp) => resp.json())
    .then((data) => (detailedInfoName.innerText = data.name));

    fetch("http://localhost:3000/characters/5")
    .then((resp) => resp.json())
    .then((data) => image.src = data.image)
}


const votesForm = document.getElementById('votes-form');
votesForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const totalVotes = document.getElementById("votes");
  console.log(totalVotes)
  totalVotes.innerText = e.target.votes.value;
  
}
