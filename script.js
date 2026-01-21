let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
let urlFuera = document.getElementById('input-text').value

fetch(url).then((res) => {
  let data = res.json();
  console.log(data);
}).then;

async function getData(urlFuera) {
    try {
        
        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
    } catch(error) {
        console.log(error);   
    }
}

// .then((resp) => { resp.json()})
// .then((data) => { console.log(data)})
// .catch((error) => { console.log(error)})