function getAPokemon(pokeName) {
  let pokeData = null;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => (pokeData = data))
    .catch((err) => console.log("An error ocurred: " + err));

  return pokeData;
}

module.exports = getAPokemon;
