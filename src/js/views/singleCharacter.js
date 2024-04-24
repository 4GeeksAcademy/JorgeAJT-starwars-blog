import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const [homeworld, setHomeworld] = useState("")
	const [specie, setSpecie] = useState("")
	const [movies, setMovies] = useState([])
	const params = useParams();

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/people/${params.character_uid}`)
		.then(response => {
			if(response.status == 404) {
				
			}
		})
		.then(response => response.json())
		.then(data => {
			console.log(data);
			setCharacter(data);
			getHomeworld(data.homeworld)
			getSpecie(data.species)
			setMovies([])
			getMovies(data.films)
		});
	},[params.character_uid])

	function getHomeworld(planetAPI) {
		fetch(planetAPI)
		.then(response => response.json())
		.then(data => setHomeworld(data.name))
	}

	function getSpecie(specieAPI) {
		fetch(specieAPI)
		.then(response => response.json())
		.then(data => setSpecie(data.name))
	}

	function getMovies(moviesCharacter) {
			moviesCharacter.forEach(enlace => {
				const numberCaracter = enlace.charAt(enlace.length - 2);
				const number = parseInt(numberCaracter);
				const singleMovie = store.films[number - 1];
				setMovies(prevMovies =>[...prevMovies, singleMovie]);
			});
	}
console.log(params);
	// console.log(store.planets[character.homeworld?.slice(-2, -1) - 1]?.name); // Tatooine
	return (
		<div className="container">
			<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${params.character_uid}.jpg`}/>
			<div className="text-white">
			<p>Name: {character.name}</p>
			<p>Height: {character.height}</p>
			<p>Weight: {character.mass}</p>
			<p>Birth year: {character.birth_year}</p>
			<p>Gender: {character.gender}</p>
			<p>Homeworld: {homeworld}</p>
			<p>Specie: {specie}</p>
			<div>Movies:
			{movies.map((movie, index) =>
				<p key={index}>{movie.title}</p>
			)}
			</div>
			</div>
			{params.character_uid != 1 &&			
			<Link to={`/characters/${parseInt(params.character_uid) - 1}`} className="btn btn-warning mt-2 mx-2">
					<span>Previous</span>
			</Link>
			}
			{params.character_uid < 87 &&	
			<Link to={`/characters/${parseInt(params.character_uid) + 1}`} className="btn btn-warning mt-2">
					<span>Next</span>
			</Link>
			}
			<h1 className="text-white">This is the single character view: {params.character_uid}</h1>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};