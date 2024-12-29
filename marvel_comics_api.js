const publicKey = "4d52fb3fa1ef52af3d6b38218aff5477"
const privateKey = "9394870fafc8931dc52368af8fdbc806e86f8320y"
const timestamp = 1
const hash = "a80ea7d0806646c1f3b6bf37422fc6fd"

const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;





const fetchMarvelCharacters=async() => {
    const response = await fetch(`${apiUrl}`)
    const data = await response.json()
    return data.data.results
}

function updateUIWithCharacters(characters) {
    const characterContainer = document.getElementById("character-list");

    characterContainer.innerHTML = "";

    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        const characterImage = document.createElement("img");
        characterImage.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        characterImage.alt = character.name;

        const characterName = document.createElement("h3");
        characterName.textContent = character.name;

        characterDiv.appendChild(characterImage);
        characterDiv.appendChild(characterName);

        characterContainer.appendChild(characterDiv);
    });
}

function fetchAndUpdateUI() {
    fetchMarvelCharacters()
        .then(characters => {
            if (characters && characters.length > 0) {
                updateUIWithCharacters(characters);
            } else {
                console.log("No characters found.");
            }
        });
}

fetchAndUpdateUI();