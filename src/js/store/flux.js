const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			starships: [],
			planets: [],
			species: [],
			vehicles: [],
			films: [],
			favorites: [],
			favBoolean: false
		},
		actions: {
			getCharacters: () => {
				fetch("https://swapi.py4e.com/api/people/")
				.then(response => response.json())
				.then(data => {
					setStore({ characters: data.results });
				});
			},
			getStarships: () => {
				fetch("https://swapi.py4e.com/api/starships/")
				.then(response => response.json())
				.then(data => {
					setStore({ starships: data.results });
				});
			},
			getPlanets: () => {
				fetch("https://swapi.py4e.com/api/planets/")
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results });
				});
			},
			getSpecies: () => {
				fetch("https://swapi.py4e.com/api/species/")
				.then(response => response.json())
				.then(data => {
					setStore({ species: data.results });
				});
			},
			getVehicles: () => {
				fetch("https://swapi.py4e.com/api/vehicles/")
				.then(response => response.json())
				.then(data => {
					setStore({ vehicles: data.results });
				});
			},
			getFilms: () => {
				fetch("https://swapi.py4e.com/api/films/")
				.then(response => response.json())
				.then(data => {
					setStore({ films: data.results });
				});
			},
			getUID: (category) => {
				return getStore()[category].map(element => { 
					 let urlArr = element.url?.split("/");
					 return urlArr[urlArr.length - 2];
					});
			}, 
			addFavorite: (nameToAdd) => {
				const updatedFavorites =  [...getStore().favorites, nameToAdd]
				setStore({ favorites: updatedFavorites });
				setStore({ favBoolean: true });
			},
			removeFavorite: (nameToRemove) => {
				const nameFound = getStore().favorites.find((element) => element === nameToRemove)
				if(nameFound === nameToRemove) {
					const updatedFavorites = getStore().favorites.filter((element) => element !== nameToRemove)
					setStore({ favorites: updatedFavorites });
					setStore({ favBoolean: false });
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				getActions().getCharacters()
				getActions().getStarships()
				getActions().getPlanets()
				getActions().getSpecies()
				getActions().getVehicles()
				getActions().getFilms()
			},
		}
	};
};

export default getState;



// pseudo codigo para aprender a generalizar
// function parseCharacter(response) {
//     return {
//         "character_name": response.name
//     }
// }

// function parsePlanet(response){
//     return {
//         "nombre_planeta": response.planeta
//     }
// }

// function parseAny(type = "", response) {
//     if (type == "character") {
//         return parseCharacter(response)
//     }
//     if (tye == "planet") {
//         return parsePlanet(response)
//     }
// }





// function nextCharacter() {
// 	setActionToDo("next")
// }

// function previousCharacter() {
// 	setActionToDo("previous")
// }

// function getObject(uid, type){
// 	return fetch(`https://swapi.py4e.com/api/${type}/${uid}`)
// }

// function requestUntilValid(type, action) {
// 	let validResponse = null
// 	do {
// 		// hacer una funcion que añada o quite 1 a UID basado en que tipo de ACCION tienes de argumento
// 		if(action === "next") {
// 			parseInt(character_uid) + 1
// 			setActionToDo("")
// 		}
// 		else if (action === "previous") {
// 			parseInt(character_uid) - 1
// 			setActionToDo("")
// 		}
// 		validResponse = getObject(character_uid , type)
// 	} while(validResponse.status === 404)
// 	return validResponse
// }