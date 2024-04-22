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
			setFavorites: (nameToAdd) => {
				const nameFound = getStore().favorites.find((element) => element === nameToAdd)
				if(nameFound === nameToAdd) {
					const updatedFavorites = getStore().favorites.filter((element) => element !== nameToAdd)
					setStore({ favorites: updatedFavorites });
				}
				else if (nameFound !== nameToAdd) {
					const updatedFavorites =  [...getStore().favorites, nameToAdd]
					setStore({ favorites: updatedFavorites });
				}
			},
			setFavBoolean : () => {
				
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
