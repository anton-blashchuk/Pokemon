async function fetchPokemonList() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    for (const pokemon of data.results) {
      fetchPokemonDetails(pokemon.url);
    }
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
  }
}

async function fetchPokemonDetails(pokemonUrl) {
      try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();

  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
  }
}