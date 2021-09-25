// const pokeDex = document.getElementById('pokeDex');
// const pokeNumber = 10; 
// const colors = {
// 	fire: '#FDDFDF',
 //	grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#f4e7da',
// 	rock: '#d5d5d4',
// 	fairy: '#fceaff',
 //	poison: '#98d7a5',
 	//bug: '#f8d5a3',
// 	dragon: '#97b3e6',
 //	psychic: '#eaeda1',
///flying: '#F5F5F5',
//fighting: '#E6E0D4',
 //	normal: '#F5F5F5'
// };
 //const main_types = Object.keys(colors);

// const fetchPokemon = () => {
//     for(let i= 0; i <= pokeNumber; i++){
//          getPokemon(i);

//     }
// }

// const getPokemon = async id => { 
//     console.log(id);
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     const  pokemon = await res.json();
//     createPokeCard(pokemon);
// }   

// //     const pokeInnerHTML = () => {
//     <div class="imgContainer">
//             <img src="s://${
//                 pokemon.id
//                 }.png" alt="${name}" />
//         </div>


//         <div class="info">

//                 <span class="number">${pokemon.id
//                 .toString()
//                 .padStart(3, '0')}</span>
//                 <h3 class="name">${name}</h3>
//                  <small class="type">Type: <span>${type}</span></small>
//             </div>

// )};
// ///* `${pokemon.name}`; */

//     pokemonEl.innerHTML = pokeInnerHTML;
//     pdContainer.appendChild(pokemonEl);
    

// fetchPokemon(); 

const pokedex = document.getElementById('pokeDex');
const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="pokeCard">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();
