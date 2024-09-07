
let SUPERHERO_TOKEN = ''
const BASE_URL = 'https://superheroapi.com/api.php/YOUR_API_KEY' //PASTE YOUR API KEY HERE
const heroImageDiv=document.getElementById('image-container')
const searchbtn = document.getElementById('search-btn');
const randomHero_btn= document.getElementById('Hero-btn')

const getSuperHero = (id) =>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())   
    .then(json => {console.log(json.name)
          
        const stats = getStatsHTML(json);
          document.getElementById('heading').innerText=` ${json.name}`
          heroImageDiv.innerHTML = `<img src = '${json.image.url}' height =300 width=300/> `
          document.getElementById('charaterdetails').innerHTML= `${stats}`
    })
        
}

randomHero_btn.onclick =() =>{
    const random = Math.floor(Math.random() * 730)
    getSuperHero(random)
}


const getsearchSuperHero =(name)=>{
fetch(`${BASE_URL}/search/${name}`)
.then(response =>response.json())
.then( json => {
    // console.log("name = ",json.name);
    const hero = json.results[0]
    const stats = getStatsHTML(hero);
    console.log("helo",hero.name)
    document.getElementById('heading').innerText=` ${hero.name}`
    heroImageDiv.innerHTML = `<img src = '${hero.image.url}' height =300 width=300/>`
    document.getElementById('charaterdetails').innerHTML= `${stats}`
})
}
searchbtn.onclick = () =>
    {
        const searchName= document.getElementById('search-field').value
        getsearchSuperHero(searchName);
    } 

const statToEmoji = {
    intelligence :'🧠',
    strength: '💪',
    speed : '⚡',
    durability: '🏋🏻‍♂️',
    power : '🔥',
    combat: '⚔️'

}
 
const getStatsHTML = (character) =>{
    const stats = Object.keys(character.powerstats).map(stat=> {
    return `<h5>${statToEmoji[stat]} ${stat}: ${character.powerstats[stat]} </h5>`
    })
    console.log(stats)
    return stats.join('')
}    
