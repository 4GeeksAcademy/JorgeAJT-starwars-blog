const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			starships: [],
			planets: [],
			species: [],
			vehicles: [],
			films: [],
			favorites: [],
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
			selectCategory: (uidToAnalyze) => {
				let categorySelected = ""
				switch(uidToAnalyze[0]) {
					case "c":
						categorySelected = "characters"
						break
					case "s":
						categorySelected = "starships"
						break  
					case "p":
						categorySelected = "planets"
						break    
					case "e":
						categorySelected = "species"
						break
					case "v":
						categorySelected = "vehicles"
						break    
					case "f":
						categorySelected = "films"
						break    
				}
				return categorySelected
			},
			addFavorite: (nameToAdd, uidToAdd) => {
				const updatedFavorites =  [...getStore().favorites, {title: nameToAdd, uid: uidToAdd }]
				setStore({ favorites: updatedFavorites });
			},
			removeFavorite: (uidToRemove) => {
				const updatedFavorites = getStore().favorites.filter((favorite) => {
					return !(favorite.uid === uidToRemove);
				});
				setStore({ favorites: updatedFavorites });
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