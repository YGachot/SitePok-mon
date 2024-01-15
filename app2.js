const pokemonImage = document.querySelector('.image_pokemon')
const pokemonNom = document.querySelector('.nom_pokemon')
const pokemonId = document.querySelector('.id_pokemon')
const pokemonType1 = document.querySelector('.type_1_pokemon')
const pokemonType2 = document.querySelector('.type_2_pokemon')
const pokemonImageType1 = document.querySelector('.image_type_1_pokemon')
const pokemonImageType2 = document.querySelector('.image_type_2_pokemon')
const pokemonStats = document.querySelector('.stats_pokemon')
const pokemonFaiblesses = document.querySelector('.faiblesses_pokemon')
const Types = document.querySelector('.types')
const pokemonFondImage = document.querySelector('.image_container')
const title = document.querySelector('.title')

const typeColors = {
    Électrik: "#F7D02C",
    Normal: "#A8A77A",
    Feu: "#EE8130",
    Eau: "#6390F0",
    Glace: "#96D9D6",
    Roche: "#B6A136",
    Vol: "#A98FF3",
    Plante: "#7AC74C",
    Psy: "#F95587",
    Spectre: "#735797",
    Insecte: "#A6B91A",
    Poison: "#A33EA1",
    Sol: "#E2BF65",
    Dragon: "#6F35FC",
    Acier: "#B7B7CE",
    Combat: "#C22E28",
    Ténèbres: "#705746",
    Fée: "#D685AD"
  }

const recherchePokemon = event => {
    event.preventDefault()
    const { value } = event.target.pokemon
    var test=`${value.toLowerCase()}`
    localStorage.setItem('valeur', test)
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => pokemonData(response))
    window.location.assign("index2.html")
} 

const recherche = localStorage.getItem('valeur')
console.log(recherche)
fetch(`https://pokebuildapi.fr/api/v1/pokemon/${recherche}`)
.then(data => data.json())
.then(response => pokemonData(response))

//Louis//

const louisfaib = {
    0 : "Conseil (f1): x5",
    1 : "Rage: x2 😠",
    2 : "Mélenchon: x0.001",
    3 : "LaSireina69: x1",
    4 : "Le deuxième oeuil de Reyna: x3",
    5 : "Rage quit: x10",
    6 : "",
    7 : "",
    8 : "",
    9 : "Angers, relégation: x45",
    10 : "Maroc: EZ 😗",
    11 : "",
    12 : "CS:GO: Nul",
    13 : "   ",
    14 : "   ",
    15 : "    ",
}

const louisstats = {
    1 : "Aigreur: 150",
    2 : "Alcoolisme: 95",
    3 : "Patriotisme: 185",
    4 : "Dehors: ∞",
    5 : "Hygiène: 0",
    6 : "Reconquête!: 200"
}

if (recherche === 'louis'){
    title.textContent = "MyPokedex - Louis"
    pokemonImage.setAttribute('src',"https://media.discordapp.net/attachments/1020008766479020033/1050682600957677640/loouis.png")
    pokemonNom.textContent = "Louis René Lemaire"
    pokemonId.textContent = "ID: #999"
    pokemonImageType1.setAttribute('src',"https://static.wikia.nocookie.net/pokemongo/images/0/0e/Dark.png")
    Types.style.background = "rgba(112,87,70,0.9)"
    let i = 0
    pokemonFaiblesses.innerHTML=''
    const basefaiblessespokemon = document.createElement('p')
    basefaiblessespokemon.classList.add("PokemonFaiblessesAnnonce")
    basefaiblessespokemon.textContent = "Faiblesses de Louis"
    pokemonFaiblesses.appendChild(basefaiblessespokemon)
    while (i < 16) {
        const FaiblessesElement = document.createElement ('div')
        FaiblessesElement.classList.add("PokemonFaiblessesElement")
        const FaiblessesName = document.createElement ('p')
        FaiblessesName.classList.add("PokemonFaiblessesName")
        FaiblessesName.textContent = louisfaib[`${i}`]
        FaiblessesElement.appendChild(FaiblessesName)
        pokemonFaiblesses.appendChild(FaiblessesElement)
        if (i===2 || i===8){
            const divvide = document.createElement('div')
            divvide.classList.add("divvide")
            divvide.textContent = "_"
            pokemonFaiblesses.appendChild(divvide)
        }
        i++
    }
    let j = 1
    const pokemonstatall = document.createElement('div')
    pokemonstatall.classList.add("pokemonStatall")
    pokemonStats.innerHTML=''
    const basestatspokemon = document.createElement('p')
    basestatspokemon.classList.add("PokemonStatsAnonce")
    basestatspokemon.textContent = "Statistiques du pokémon"
    pokemonStats.appendChild(basestatspokemon)
    while (j<7) {
        const pokemonstatelement = document.createElement('div')
        pokemonstatelement.classList.add("PokemonStatElement")
        const pokemonstatname = document.createElement('p')
        pokemonstatname.classList.add("PokemonStatName")
        pokemonstatname.textContent = louisstats[`${j}`]
        pokemonstatelement.appendChild(pokemonstatname)
        pokemonstatall.appendChild(pokemonstatelement)
        pokemonStats.appendChild(pokemonstatelement)
        j+=1
    }  
}

//Fin Louis//

//Noah//


const noahfaib = {
    0 : "singe: x5",
    1 : "   ",
    2 : "   ",
    3 : "   ",
    4 : "freshness: x2",
    5 : "   ",
    6 : "   ",
    7 : "   ",
    8 : "   ",
    9 : "   ",
    10 : "   ",
    11 : "   ",
    12 : "   ",
    13 : "   ",
    14 : "   ",
    15 : "    ",
}

const noahstats = {
    1 : "Alcool: oué tkt",
    2 : "Nettoyage de la france: 10",
    3 : "Iwona flor: 0.5",
    4 : "Lieu d'aisance: 50",
    5 : "    ",
    6 : "    ",
}

if (recherche === 'noah'){
    title.textContent = "MyPokedex - Noah"
    pokemonImage.setAttribute('src',"https://cdn.discordapp.com/attachments/855789623388798998/1052954078843514880/noahlaise.png")
    pokemonNom.textContent = "Noah l'aise"
    pokemonId.textContent = "ID: #1000"
    pokemonImageType1.setAttribute('src',"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/9\/9d\/Water.png")
    Types.style.background = "rgba(99,144,240,0.9)"
    let i = 0
    pokemonFaiblesses.innerHTML=''
    const basefaiblessespokemon = document.createElement('p')
    basefaiblessespokemon.classList.add("PokemonFaiblessesAnnonce")
    basefaiblessespokemon.textContent = "Faiblesses du pokémon"
    pokemonFaiblesses.appendChild(basefaiblessespokemon)
    while (i < 16) {
        const FaiblessesElement = document.createElement ('div')
        FaiblessesElement.classList.add("PokemonFaiblessesElement")
        const FaiblessesName = document.createElement ('p')
        FaiblessesName.classList.add("PokemonFaiblessesName")
        FaiblessesName.textContent = noahfaib[`${i}`]
        FaiblessesElement.appendChild(FaiblessesName)
        pokemonFaiblesses.appendChild(FaiblessesElement)
        if (i===2 || i===4){
            const divvide = document.createElement('div')
            divvide.classList.add("divvide")
            divvide.textContent = "_"
            pokemonFaiblesses.appendChild(divvide)
        }
        i++
    }
    let j = 1
    const pokemonstatall = document.createElement('div')
    pokemonstatall.classList.add("pokemonStatall")
    pokemonStats.innerHTML=''
    const basestatspokemon = document.createElement('p')
    basestatspokemon.classList.add("PokemonStatsAnonce")
    basestatspokemon.textContent = "Statistiques du pokémon"
    pokemonStats.appendChild(basestatspokemon)
    while (j<7) {
        const pokemonstatelement = document.createElement('div')
        pokemonstatelement.classList.add("PokemonStatElement")
        const pokemonstatname = document.createElement('p')
        pokemonstatname.classList.add("PokemonStatName")
        pokemonstatname.textContent = noahstats[`${j}`]
        pokemonstatelement.appendChild(pokemonstatname)
        pokemonstatall.appendChild(pokemonstatelement)
        pokemonStats.appendChild(pokemonstatelement)
        j+=1
    }  
}

//fin Noah//

//Lenaig//

const lenaigfaib = {
    0 : "Lisa, camionneuse: x6",
    1 : "Pied de page html: x4",
    2 : "Jett: Deviens confus",
    3 : "Iwona: x0.5",
    4 : "Python: x5",
    5 : "Maths: ÷ 2",
    6 : "    ",
    7 : "   ",
    8 : "   ",
    9 : "   ",
    10 : "   ",
    11 : "   ",
    12 : "   ",
    13 : "   ",
    14 : "   ",
    15 : "    ",
}

const lenaigstats = {
    1 : "Byslide: 120",
    2 : "Valorant: 150",
    3 : "Cautionne pas: 135",
    4 : "Mangeur de carte graphique: 140",
    5 : "PVP Minecrfat: Trop fort",
    6 : "    ",
}

if (recherche === 'lenaig'){
    title.textContent = "MyPokedex - Lenaig"
    pokemonImage.setAttribute('src',"https://cdn.discordapp.com/attachments/1020008766479020033/1052962936513105961/lenaigfee.png")
    pokemonNom.textContent = "Lenaige"
    pokemonId.textContent = "ID: #6969"
    pokemonImageType1.setAttribute('src',"https:\/\/static.wikia.nocookie.net\/pokemongo\/images\/4\/43\/Fairy.png")
    Types.style.background = "rgba(214,133,173,0.9)"
    let i = 0
    pokemonFaiblesses.innerHTML=''
    const basefaiblessespokemon = document.createElement('p')
    basefaiblessespokemon.classList.add("PokemonFaiblessesAnnonce")
    basefaiblessespokemon.textContent = "Faiblesses du pokémon"
    pokemonFaiblesses.appendChild(basefaiblessespokemon)
    while (i < 16) {
        const FaiblessesElement = document.createElement ('div')
        FaiblessesElement.classList.add("PokemonFaiblessesElement")
        const FaiblessesName = document.createElement ('p')
        FaiblessesName.classList.add("PokemonFaiblessesName")
        FaiblessesName.textContent = lenaigfaib[`${i}`]
        FaiblessesElement.appendChild(FaiblessesName)
        pokemonFaiblesses.appendChild(FaiblessesElement)
        if (i===1 || i===3){
            const divvide = document.createElement('div')
            divvide.classList.add("divvide")
            divvide.textContent = "_"
            pokemonFaiblesses.appendChild(divvide)
        }
        i++
    }
    let j = 1
    const pokemonstatall = document.createElement('div')
    pokemonstatall.classList.add("pokemonStatall")
    pokemonStats.innerHTML=''
    const basestatspokemon = document.createElement('p')
    basestatspokemon.classList.add("PokemonStatsAnonce")
    basestatspokemon.textContent = "Statistiques du pokémon"
    pokemonStats.appendChild(basestatspokemon)
    while (j<7) {
        const pokemonstatelement = document.createElement('div')
        pokemonstatelement.classList.add("PokemonStatElement")
        const pokemonstatname = document.createElement('p')
        pokemonstatname.classList.add("PokemonStatName")
        pokemonstatname.textContent = lenaigstats[`${j}`]
        pokemonstatelement.appendChild(pokemonstatname)
        pokemonstatall.appendChild(pokemonstatelement)
        pokemonStats.appendChild(pokemonstatelement)
        j+=1
    }  
}


//fin Lenaig//

const pokemonData = data => {
    title.textContent = "MyPokedex - " + data.name
    const img = data.image;
    pokemonImage.setAttribute('src',img)
    pokemonNom.textContent = data.name
    pokemonId.textContent = `ID: #${data.id}`
    /*pokemonType1.textContent = data.apiTypes[0].name*/
    const imgt1 = data.apiTypes[0].image
    pokemonImageType1.setAttribute('src',imgt1)
    if (typeof data.apiTypes[1] !== 'undefined'){
        /*pokemonType2.textContent = data.apiTypes[1].name*/
        const imgt2 = data.apiTypes[1].image
        pokemonImageType2.setAttribute('src',imgt2)
        Types.style.background = typeColors[data.apiTypes[1].name]
    }
    else{
        Types.style.background = typeColors[data.apiTypes[0].name]
    }
    pokemonFondImage.style.background = typeColors[data.apiTypes[0].name]
    console.log(data.stats)


    const funcPokemonsFaiblessesListe = apiResistances => {
        let i = 0
        pokemonFaiblesses.innerHTML=''
        const basefaiblessespokemon = document.createElement('p')
        basefaiblessespokemon.classList.add("PokemonFaiblessesAnnonce")
        basefaiblessespokemon.textContent = "Faiblesses du pokémon"
        pokemonFaiblesses.appendChild(basefaiblessespokemon)
        apiResistances.forEach( name => {
        const FaiblessesElement = document.createElement ('div')
        FaiblessesElement.classList.add("PokemonFaiblessesElement")
        const FaiblessesName = document.createElement ('p')
        FaiblessesName.classList.add("PokemonFaiblessesName")
        const FaiblessesVal = document.createElement ('p')
        FaiblessesVal.classList.add("PokemonFaiblessesValeur")
        FaiblessesName.textContent = data.apiResistances[`${i}`].name + ":"
        FaiblessesVal.textContent = "x" + data.apiResistances[`${i}`].damage_multiplier + " "
        FaiblessesElement.appendChild(FaiblessesName)
        FaiblessesElement.appendChild(FaiblessesVal)
        pokemonFaiblesses.appendChild(FaiblessesElement)
        FaiblessesElement.style.background = typeColors[data.apiResistances[`${i}`].name]
        if (i===5 || i===11){
            const divvide = document.createElement('div')
            divvide.classList.add("divvide")
            divvide.textContent = "_"
            pokemonFaiblesses.appendChild(divvide)
        }
        i++
       });
    }

    const statsListe = {
        1 : "HP",
        2 : "Attaque",
        3 : "Défense",
        4 : "Attaque spéciale",
        5 : "Défense spéciale",
        6 : "Vitesse"
    
    }
    
    const funcPokemonStatsListe = stats => {
        let i = 1
        const pokemonstatall = document.createElement('div')
        pokemonstatall.classList.add("pokemonStatall")
        pokemonStats.innerHTML=''
        const basestatspokemon = document.createElement('p')
        basestatspokemon.classList.add("PokemonStatsAnonce")
        basestatspokemon.textContent = "Statistiques du pokémon"
        pokemonStats.appendChild(basestatspokemon)
        while (i<7) {
            const pokemonstatelement = document.createElement('div')
            pokemonstatall.classList.add("PokemonStatElement")
            const pokemonstatname = document.createElement('p')
            pokemonstatname.classList.add("PokemonStatName")
            const pokemonstatvaleur = document.createElement('p')
            pokemonstatvaleur.classList.add("PokemonStatValeur")
            pokemonstatname.textContent = statsListe[`${i}`] + " :"
            if (i===1) {
                pokemonstatvaleur.textContent = " " + data.stats.HP
            }
            if (i===2) {
                pokemonstatvaleur.textContent = " " + data.stats.attack
            }
            if (i===3) {
                pokemonstatvaleur.textContent = " " + data.stats.defense
            }
            if (i===4) {
                pokemonstatvaleur.textContent = " " + data.stats.special_attack
            }
            if (i===5) {
                pokemonstatvaleur.textContent = " " + data.stats.special_defense
            }
            if (i===6) {
                pokemonstatvaleur.textContent = " " + data.stats.speed
            } 
            pokemonstatelement.appendChild(pokemonstatname)
            pokemonstatelement.appendChild(pokemonstatvaleur)
            pokemonStats.appendChild(pokemonstatelement)
            i++
        }      
    }
    const EvoContainer = document.querySelector('.EvoContainerTotal')
    if (data.apiPreEvolution.name){
        const PreEvolution1 = data.apiPreEvolution.name
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${PreEvolution1}`)
        .then(dataPreEvo1 => dataPreEvo1.json())
        .then(response => PreEvo1(response))
        const PreEvo1 = dataPreEvo1 => {
            if (dataPreEvo1.apiPreEvolution.name) {
                const PreEvolution2 = dataPreEvo1.apiPreEvolution.name
                fetch(`https://pokebuildapi.fr/api/v1/pokemon/${PreEvolution2}`)
                .then(dataPreEvo2 => dataPreEvo2.json())
                .then(response => PreEvo2(response))
                const PreEvo2 = dataPreEvo2 => {
                    const imgcontainerpreevo2 = document.createElement('div')
                    imgcontainerpreevo2.classList.add("Evo_Container")
                    imgcontainerpreevo2.onclick = function() {
                        var pokemonMoreInfo= dataPreEvo2.name
                        localStorage.setItem('valeur', pokemonMoreInfo)
                        window.location.assign("index2.html")
                    }
                    const imgpreevo2 = document.createElement('img')
                    console.log(dataPreEvo2.image)
                    imgpreevo2.src= dataPreEvo2.image
                    imgpreevo2.classList.add("Image_Evo")
                    imgcontainerpreevo2.appendChild(imgpreevo2)
                    EvoContainer.appendChild(imgcontainerpreevo2)
                    const imgcontainerpreevo1 = document.createElement('div')
                    imgcontainerpreevo1.classList.add("Evo_Container")
                    imgcontainerpreevo1.onclick = function() {
                        var pokemonMoreInfo= dataPreEvo1.name
                        localStorage.setItem('valeur', pokemonMoreInfo)
                        window.location.assign("index2.html")
                    }
                    const imgpreevo1 = document.createElement('img')
                    console.log(dataPreEvo1.image)
                    imgpreevo1.src= dataPreEvo1.image
                    imgpreevo1.classList.add("Image_Evo")
                    imgcontainerpreevo1.appendChild(imgpreevo1)
                    EvoContainer.appendChild(imgcontainerpreevo1)
                    const imgpokemonactuelcontainer = document.createElement('div')
                    imgpokemonactuelcontainer.classList.add("Evo_Container")
                    imgpokemonactuelcontainer.onclick = function() {
                        var pokemonMoreInfo= data.name
                        localStorage.setItem('valeur', pokemonMoreInfo)
                        window.location.assign("index2.html")
                    }
                    const imgpokemonactuel = document.createElement ('img')
                    imgpokemonactuel.classList.add("Image_Evo")
                    imgpokemonactuel.src = data.image
                    imgpokemonactuelcontainer.appendChild(imgpokemonactuel)
                    EvoContainer.appendChild(imgpokemonactuelcontainer)             
                }
            }
            else {
                const imgcontainerpreevo1 = document.createElement('div')
                imgcontainerpreevo1.classList.add("Evo_Container")
                imgcontainerpreevo1.onclick = function() {
                    var pokemonMoreInfo= dataPreEvo1.name
                    localStorage.setItem('valeur', pokemonMoreInfo)
                    window.location.assign("index2.html")
                }
                const imgpreevo1 = document.createElement('img')
                console.log(dataPreEvo1.image)
                imgpreevo1.src= dataPreEvo1.image
                imgpreevo1.classList.add("Image_Evo")
                imgcontainerpreevo1.appendChild(imgpreevo1)
                EvoContainer.appendChild(imgcontainerpreevo1)
                const imgpokemonactuelcontainer = document.createElement('div')
                imgpokemonactuelcontainer.classList.add("Evo_Container")
                imgpokemonactuelcontainer.onclick = function() {
                    var pokemonMoreInfo= data.name
                    localStorage.setItem('valeur', pokemonMoreInfo)
                    window.location.assign("index2.html")
                }
                const imgpokemonactuel = document.createElement ('img')
                imgpokemonactuel.classList.add("Image_Evo")
                imgpokemonactuel.src = data.image
                imgpokemonactuelcontainer.appendChild(imgpokemonactuel)
                EvoContainer.appendChild(imgpokemonactuelcontainer)
            }
        }
    }
    if (typeof data.apiPreEvolution.name === 'undefined') {
        const imgpokemonactuelcontainer = document.createElement('div')
        imgpokemonactuelcontainer.classList.add("Evo_Container")
        imgpokemonactuelcontainer.onclick = function() {
            var pokemonMoreInfo= data.name
            localStorage.setItem('valeur', pokemonMoreInfo)
            window.location.assign("index2.html")
        }
        const imgpokemonactuel = document.createElement ('img')
        imgpokemonactuel.classList.add("Image_Evo")
        imgpokemonactuel.src = data.image
        imgpokemonactuelcontainer.appendChild(imgpokemonactuel)
        EvoContainer.appendChild(imgpokemonactuelcontainer)
    }
    if (typeof data.apiEvolutions[0] !== 'undefined') {
        const Evolution1 = data.apiEvolutions[0].name
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/${Evolution1}`)
        .then(dataEvo1 => dataEvo1.json())
        .then(response => Evo1(response))
        const Evo1 = dataEvo1 => {
            const imgcontainerevo1 = document.createElement('div')
            imgcontainerevo1.classList.add("Evo_Container")
            imgcontainerevo1.onclick = function() {
                var pokemonMoreInfo= dataEvo1.name
                localStorage.setItem('valeur', pokemonMoreInfo)
                window.location.assign("index2.html")
              }
            const imgevo1 = document.createElement('img')
            console.log(dataEvo1.image)
            imgevo1.src= dataEvo1.image
            imgevo1.classList.add("Image_Evo")
            imgcontainerevo1.appendChild(imgevo1)
            EvoContainer.appendChild(imgcontainerevo1)
            if (typeof dataEvo1.apiEvolutions[0] !== 'undefined') {
                const Evolution2 = dataEvo1.apiEvolutions[0].name
                fetch(`https://pokebuildapi.fr/api/v1/pokemon/${Evolution2}`)
                .then(dataEvo2 => dataEvo2.json())
                .then(response => Evo2(response))
                const Evo2 = dataEvo2 => {
                    const imgcontainerevo2 = document.createElement('div')
                    imgcontainerevo2.classList.add("Evo_Container")
                    imgcontainerevo2.onclick = function() {
                        var pokemonMoreInfo= dataEvo2.name
                        localStorage.setItem('valeur', pokemonMoreInfo)
                        window.location.assign("index2.html")
                      }
                    const imgevo2 = document.createElement('img')
                    console.log(dataEvo2.image)
                    imgevo2.src= dataEvo2.image
                    imgevo2.classList.add("Image_Evo")
                    imgcontainerevo2.appendChild(imgevo2)
                    EvoContainer.appendChild(imgcontainerevo2)
                }
            }
        }
    }
    funcPokemonsFaiblessesListe(data.apiResistances)
    funcPokemonStatsListe(data.stats)    
}
