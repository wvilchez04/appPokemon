const pokemonContainer = document.querySelector(".pokemon-container");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input[type=text]");
console.log(inputEl);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  pokemonContainer.innerHTML = "";
  getPokemon(inputEl.value);
});
function consultarPokemones(){
  let primerId = Math.round(Math.random() * 150)
  //let segundoId = Math.round(Math.random() * 150)

  getPokemon(primerId, 1)
 // consultarPokemon(segundoId, 2)
}

async function getPokemon(name = "bulbasaur") {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  pokemonEl.innerHTML = `
    <div class="info">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="200">
        <h2>${pokemon.name}</h2>
    </div>

    <div class="stats">
      ${pokemon.stats
        .map((stat) => {
          return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;
        })
        .join("")}
    </div>

    <div class="abilities">
    ${pokemon.abilities
      .map((ability) => {
        return `<p>${ability.ability.name}</p>`;
      })
      .join("")}
    <div>
  `;
  
  pokemonContainer.appendChild(pokemonEl);
}

// run things ----------------
getPokemon();