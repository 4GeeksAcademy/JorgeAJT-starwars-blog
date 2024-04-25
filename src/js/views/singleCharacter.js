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
	const [actionToDo, setActionToDo] = useState("")
	const { character_uid } = useParams();

	function nextCharacter() {
		setActionToDo("next")
	}

	function previousCharacter() {
		setActionToDo("previous")
	}

	function getObject(uid, type){
		return fetch(`https://swapi.py4e.com/api/${type}/${uid}`)
	}
	
	function requestUntilValid(type, action) {
		let validResponse = null
		do {
			// hacer una funcion que añada o quite 1 a UID basado en que tipo de ACCION tienes de argumento
			if(action === "next") {
				parseInt(character_uid) + 1
				setActionToDo("")
			}
			else if (action === "previous") {
				parseInt(character_uid) - 1
				setActionToDo("")
			}
			validResponse = getObject(character_uid , type)
		} while(validResponse.status === 404)
		return validResponse
	}

	useEffect(()=>{
		requestUntilValid("people", actionToDo)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			setCharacter(data);
			getHomeworld(data.homeworld)
			getSpecie(data.species)
			setMovies([])
			getMovies(data.films)
		});
	},[character_uid])

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

	// console.log(store.planets[character.homeworld?.slice(-2, -1) - 1]?.name); // Tatooine
	return (
		<div className="container">
			<div className="d-flex justify-content-center mt-5">
				<img src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${character_uid}.jpg`}/>
				<div className="text-white ms-5">
					<p>Name: {character.name}</p>
					<p>Height: {character.height}</p>
					<p>Weight: {character.mass}</p>
					<p>Birth year: {character.birth_year}</p>
					<p>Gender: {character.gender}</p>
					<p>Homeworld: {homeworld}</p>
					<p>Specie: {specie}</p>
					<div>Movies:
						{movies.map((movie, index) =>
							<p key={index} className="ms-5">{movie.title}</p>
						)}
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center mt-4">
			{character_uid != 1 &&			
			<Link to={`/characters/${character_uid}`} className="btn btn-warning mt-2 mx-2" onClick={previousCharacter}>
					<span>Previous</span>
			</Link>
			}
			{character_uid < 87 &&	
			<Link to={`/characters/${character_uid}`} className="btn btn-warning mt-2" onClick={nextCharacter}>
					<span>Next</span>
			</Link>
			}
			</div>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};