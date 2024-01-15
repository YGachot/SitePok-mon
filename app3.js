const start = document.getElementById("boutonstart")
const reponseuser = document.querySelector('.recherchereponse')
const valide = document.getElementById("boutonvalid")
const jeucontaineur = document.querySelector(".jeu")
const bestscore = document.querySelector(".bestscore")
const retry = document.getElementById("boutonretry")
const search = document.getElementById("input")
const quit = document.getElementById("boutonstop")
const acceuil = document.querySelector(".acceuil")

valide.style.display = "none"
reponseuser.style.display = "none"
retry.style.display = "none"
quit.style.display = "none"
acceuil.style.display = "none"
let pnts = 0
let time = 0
let i = 1
start.onclick = function jeutest () {
    acceuil.style.display="block"
    quit.style.display="block"
    search.style.color = "rgba(0,0,0)"
    const pointsaffichage = document.createElement('p')
    pointsaffichage.classList.add("pnts")
    pointsaffichage.textContent = `score: ${pnts}/${i}`
    i += 1
    jeucontaineur.appendChild(pointsaffichage)
    start.style.display = "none"
    reponseuser.style.display = "block"
    valide.style.display = "block"
    const audio = document.createElement('audio')
    audio.src = 'https://cdn.discordapp.com/attachments/1020008766479020033/1064887559861309450/HARDEST_WHOS_THAT_POKEMON_COMPILATION_-_Max_S_mp3cut.net.mp3'
    let min = 1
    let max = 899
    let random = Math.floor(Math.random() * (max-min + 1)) + min
    const oldImage = jeucontaineur.querySelector("img")
    if(oldImage) jeucontaineur.removeChild(oldImage)
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${random}`)
    .then(data => data.json())
    .then(response => JeuData(response))
    const JeuData = data => {
        const image = document.createElement('img')
        image.classList.add("imagemystere")
        image.src = data.image
        jeucontaineur.appendChild(image)
        let reponse = data.name
        reponse = reponse.toLowerCase()
        image.onload = function () {
            audio.play()
        }
        const form = document.querySelector('.FormSearch')
        form.addEventListener('submit', function(event) {
            event.preventDefault()
        })
        function controle(){
            var saisie = document.getElementById("input").value
            saisie = saisie.toLowerCase()
            if (saisie === "") {
                alert('Il faut saisir un nom de pokémon')
            }
            else {
                if (saisie === reponse){
                    pnts += 1
                    search.style.color = "rgba(0,255,0)"
                    console.log(pnts)
                }
                else {
                    search.style.color = "rgba(255,0,0)"
                }
                image.style.filter = "brightness(100%)"
                const nom = document.createElement('p')
                nom.textContent = `Réponse: ${data.name}`
                nom.classList.add("nom")
                jeucontaineur.appendChild(nom)
            }
        }
        valide.onclick = function () {
            controle()
            var saisie = document.getElementById("input").value
            saisie = saisie.toLowerCase()
            if (saisie != "") {
                valide.onclick = function () {
                    time += 1
                    if (time > 24 ) {
                        score()
                    }
                    else {
                        const nom = document.querySelector(".nom")
                        jeucontaineur.removeChild(nom)
                        console.log(time)
                        pointsaffichage.remove()
                        document.getElementById("input").value = ""     
                        jeutest()
                    }
                }
            }
        }
        function score () {
            const nom = document.querySelector(".nom")
            image.style.display = "none"
            valide.style.display = "none"
            search.style.display = "none"
            nom.style.display = "none"
            quit.style.display = "none"
            retry.style.display = "block"
            retry.onclick = function () {
                location.reload()
            }
        }
        quit.onclick = function () {
            location.reload()
        }
    }
}

