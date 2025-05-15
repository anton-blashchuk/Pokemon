async function fetchPokemonList() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        console.log(data)
        for (const pokemon of data.results) {
            fetchPokemonDetails(pokemon.url);
        }
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    }
}

async function fetchPokemonDetails(pokemonUrl) {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    }
}


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

includeHTML()