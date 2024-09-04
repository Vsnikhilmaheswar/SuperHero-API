// const getSuperHero = () =>{
//     fetch('https://superheroapi.com/api.php/e54d984e64f8bd53b702abf744aa4d6f/245').then(response => response.json()).then(json => console.log(json.name))
 
// }
// getSuperHero()
let SUPERHERO_TOKEN = ''
const BASE_URL = 'https://superheroapi.com/api.php/e54d984e64f8bd53b702abf744aa4d6f'
const heroImageDiv=document.getElementById('image-container')
const searchbtn = document.getElementById('search-btn');
const randomHero_btn= document.getElementById('Hero-btn')
const getSuperHero = (id) =>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())   
    .then(json => {console.log(json.name)
          document.getElementById('heading').innerText=`${json.name}`
          heroImageDiv.innerHTML = `<img src = '${json.image.url}' height =300 width=300/>`
          
    })
        //  item.innerHTML += `<img src="${img}"/>`
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
    console.log("helo",hero.name)
    
    heroImageDiv.innerHTML = `<img src = '${hero.image.url}' height =300 width=300/>`
})
}
searchbtn.onclick = () =>
    {
        const searchName= document.getElementById('search-field').value
        getsearchSuperHero(searchName);
    } 