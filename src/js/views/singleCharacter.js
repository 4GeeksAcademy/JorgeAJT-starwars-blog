import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const [homeworld, setHomeworld] = useState("")
	const [specie, setSpecie] = useState("")
	const [movies, setMovies] = useState([])
	const { character_uid } = useParams();

	const isMobile = useMediaQuery({ query: '(max-width: 770px)' });

	useEffect(()=>{
		fetch(`https://swapi.py4e.com/api/people/${character_uid}`)
		.then(response => response.json())
		.then(data => {
			setCharacter(data);
			getHomeworld(data.homeworld)
			getSpecie(data.species)
			setMovies([])
			getMovies(data.films)
		});
	},[])

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

	return (
		<div className="container mb-5">
			{isMobile ? 			
			<div className="d-flex justify-content-center mt-5 single-view-mobile flex-column">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/characters/c${character_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5 mt-4">
					<h4 className="mb-3">{character.name}</h4>
					<p>Height: {character.height}</p>
					<p>Weight: {character.mass}</p>
					<p>Birth year: {character.birth_year}</p>
					<p>Gender: {character.gender}</p>
					<p>Homeworld: {homeworld}</p>
					<p>Specie: {specie}</p>
					<div>Movies:
						{movies.map((movie, index) =>
							<p key={index} className="ms-5 mt-1">{movie.title}</p>
						)}
					</div>
				</div>
			</div>
			:
			<div className="d-flex justify-content-center mt-5 single-view">
				<img src={`https://raw.githubusercontent.com/4GeeksAcademy/JorgeAJT-starwars-blog/master/src/img/characters/c${character_uid}.jpg`} className="rounded-3"/>
				<div className="text-white ms-5">
					<h4 className="mb-3">{character.name}</h4>
					<p>Height: {character.height}</p>
					<p>Weight: {character.mass}</p>
					<p>Birth year: {character.birth_year}</p>
					<p>Gender: {character.gender}</p>
					<p>Homeworld: {homeworld}</p>
					<p>Specie: {specie}</p>
					<div>Movies:
						{movies.map((movie, index) =>
							<p key={index} className="ms-5 mt-1">{movie.title}</p>
						)}
					</div>
				</div>
			</div>
			}
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};