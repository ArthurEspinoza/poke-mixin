const { default: axios } = require("axios");

async function getAPokemon(pokeName) {
  let pokeData = null;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    const data = response.data;
    pokeData = data;
    return data;
  } catch (error) {
    console.log("Error on the request: ", error);
  }
}

module.exports = getAPokemon;
