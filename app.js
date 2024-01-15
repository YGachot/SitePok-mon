const search = document.getElementById('search')
const FormSearch = document.querySelector('.FormSearch')
search.addEventListener('keyup', function(){
  fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
  .then(dataSuggestion => dataSuggestion.json())
  .then(response => pokemonSuggestion(response))
  const pokemonSuggestion = dataSuggestion =>{
    const input = search.value
    const result = dataSuggestion.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
    console.log(search.value)
    const clicksug = document.getElementById('suggestion')
    if (clicksug) {
      clicksug.remove()
      const test = document.createElement('div')
      test.setAttribute("id","suggestion")
      FormSearch.appendChild(test)
    let suggestion = ''
    if (input.length > 2){
      result.forEach(resultItem => {
        const suggestionElement = document.createElement('div')
        suggestionElement.classList.add('suggestion')
        suggestionElement.textContent  = resultItem.name
        suggestionElement.addEventListener('click', function() {
          var pokemonMoreInfo = this.textContent
          localStorage.setItem('valeur', pokemonMoreInfo)
          location.assign("index2.html")
        })
      document.getElementById('suggestion').appendChild(suggestionElement)
      })
    }}
  }
})


const recherchePokemon = event => {
  event.preventDefault()
  const { value } = event.target.pokemon
  var rechercheEffectuée=`${value.toLowerCase()}`
  localStorage.setItem('valeur', rechercheEffectuée)
  window.location.assign("index2.html")
}
const typeColors = {
  Électrik: "rgba(247,208,44,0.9)",
  Normal: "rgba(168,167,122,0.9)",
  Feu: "rgba(238,129,48,0.9)",
  Eau: "rgba(99,144,240,0.9)",
  Glace: "rgba(9,109,157,0.9)",
  Roche: "rgba(182,161,54,0.9)",
  Vol: "rgba(169,143,243,0.9)",
  Plante: "rgba(122,199,76,0.9)",
  Psy: "rgba(249,85,135,0.9)",
  Spectre: "rgba(115,87,151,0.9)",
  Insecte: "rgba(166,185,26,0.9)",
  Poison: "rgba(163,62,161,0.9)",
  Sol: "rgba(226,191,101,0.9)",
  Dragon: "rgba(111,53,252,0.9)",
  Acier: "rgba(183,183,206,0.9)",
  Combat: "rgba(194,46,40,0.9)",
  Ténèbres: "rgba(112,87,70,0.9)",
  Fée: "rgba(214,133,173,0.9)"
}


let a=0
let i=1

function liste25 () {
const liste25 = document.querySelector('.liste25')
const pokemoncardcomplete = document.createElement('div')
pokemoncardcomplete.classList.add("emplacement_complet_pokemon")
liste25.appendChild(pokemoncardcomplete)
while (i<26+25*a) {
  const card_pokemon = document.createElement('div')
  card_pokemon.classList.add("card_pokemon")
  const image_container = document.createElement('div')
  image_container.classList.add("image_container")
  const imagePokemon = document.createElement('img')
  imagePokemon.classList.add("image_pokemon")
  imagePokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
  image_container.appendChild(imagePokemon)
  card_pokemon.appendChild(image_container)
  fetch(`https://pokebuildapi.fr/api/v1/pokemon/${i}`)
  .then(data => data.json())
  .then(response => pokemonData(response))
  const pokemonData = data => {
    card_pokemon.style.background = typeColors[data.apiTypes[0].name]
    const nom_pokemon = document.createElement('p')
    nom_pokemon.classList.add("nom_pokemon")
    nom_pokemon.textContent = data.name
    card_pokemon.appendChild(nom_pokemon)
    card_pokemon.onclick = function() {
      var pokemonMoreInfo= data.name
      localStorage.setItem('valeur', pokemonMoreInfo)
      window.location.assign("index2.html")
    }
  }
  pokemoncardcomplete.appendChild(card_pokemon)
  console.log(i)
  i += 1
}}
liste25()
const left_button = document.querySelector('.button_switch_left')
const right_button = document.querySelector('.button_switch_right')
right_button.onclick = function () {
  a+=1
  i=a*25+1
  card_pokemon = document.querySelector('.emplacement_complet_pokemon')
  card_pokemon.remove()
  liste25()
}
left_button.onclick = function () {
  a-=1
  i=a*25+1
  if (a<0) {
    alert("Il n'y a pas de pokémon précedent ceux-ci")
    a+=1
    i=1
  }
  else {
    card_pokemon = document.querySelector('.emplacement_complet_pokemon')
    card_pokemon.remove()
    liste25()
  }
}
