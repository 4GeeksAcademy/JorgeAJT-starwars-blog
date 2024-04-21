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
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
				.then(response => response.json())
				.then(data => {
					setStore({ characters: data.results });
				});
			},
			getStarships: () => {
				fetch("https://swapi.dev/api/starships/")
				.then(response => response.json())
				.then(data => {
					setStore({ starships: data.results });
				});
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
				.then(response => response.json())
				.then(data => {
					setStore({ planets: data.results });
				});
			},
			getSpecies: () => {
				fetch("https://swapi.dev/api/species/")
				.then(response => response.json())
				.then(data => {
					setStore({ species: data.results });
				});
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/")
				.then(response => response.json())
				.then(data => {
					setStore({ vehicles: data.results });
				});
			},
			getFilms: () => {
				fetch("https://swapi.dev/api/films/")
				.then(response => response.json())
				.then(data => {
					setStore({ films: data.results });
				});
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
