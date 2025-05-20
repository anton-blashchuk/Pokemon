/* fetches details for specific pokemon, which is chosen by URL in parameters */
async function fetchPokemonDetails(pokemonUrl) {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    }
}

/* fetches full Pokemon list and adds details for each one by an extra request per Pokemon */
async function fetchPokemonList(callback) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        const results = data.results;
        let pokemon, pokemonDetails
        let pokemonsDetailed = [] //list to return
        for (let i = 0; i < results.length; i++) {
            pokemon = results[i] //currently handled pokemon
            pokemonDetails = await fetchPokemonDetails(pokemon.url);
            let pokemonDetailed = {} //combined info from main list and extra response
            Object.assign(pokemonDetailed, pokemon, pokemonDetails)
            pokemonsDetailed.push(pokemonDetailed)
        }
        callback(pokemonsDetailed)
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    }
}



/* replaces elements with name `include` and `w3-include-html` attribute with HTML text fetched by value of this attribute */
function includeHTML() {
    let allElements, element, includeAttribute, xhttp;
    /*loop through a collection of HTML elements with name `include`*/
    allElements = document.getElementsByName("include");
    for (let i = 0; i < allElements.length; i++) {
        element = allElements[i];
        /*search for elements with a certain attribute*/
        includeAttribute = element.getAttribute("w3-include-html");
        if (includeAttribute) {
            /*make an HTTP request using the attribute value as the file name*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { element.innerHTML = this.responseText; }
                    if (this.status == 404) { element.innerHTML = "Page not found."; }
                    /*remove the attribute*/
                    element.removeAttribute("w3-include-html");
                    /*call this function once more to handle next include*/
                    includeHTML();
                }
            }
            xhttp.open("GET", includeAttribute, true);
            xhttp.send();
            /*exit the function, updated document is handled by recursive call above*/
            return;
        }
    }
};

includeHTML()
fetchPokemonList((pokemonList) => { 
    console.log(pokemonList)
    const pokemonContainer = document.getElementById("pokemon_container")
    //TODO add all pokemons from list
 })